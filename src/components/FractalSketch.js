import React, { useRef, useState, useEffect, lazy, Suspense } from "react";

// Lazy-load Sketch only in the browser
const Sketch = typeof window !== "undefined" ? lazy(() => import("react-p5")) : () => null;

const FractalSketch = ({ selectedFractal, treeConfig, sierpinskiConfig }) => {
  const [isClient, setIsClient] = useState(false);
  const kochSegmentsRef = useRef([]);
  let canvasWidth = 600;
  let canvasHeight = 600;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  const setup = (p5, canvasParentRef) => {
    canvasWidth = canvasParentRef.offsetWidth;
    canvasHeight = canvasParentRef.offsetHeight || window.innerHeight * 0.6;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.frameRate(1);
    if (selectedFractal === "Koch") initKoch(p5);
  };

  const draw = (p5) => {
    p5.clear();
    if (selectedFractal === "Tree" && treeConfig) {
      const { depth, angle, lengthRatio, startLength } = treeConfig;
      drawTree(p5, p5.width / 2, p5.height, -90, startLength, depth, angle, lengthRatio);
    } else if (selectedFractal === "Sierpinski" && sierpinskiConfig) {
      const { depth } = sierpinskiConfig;
      const baseY = p5.height - 10;
      const baseLen = p5.width * 0.5;
      const topY = baseY - (Math.sqrt(3) / 2) * baseLen;
      drawSierpinski(p5, p5.width / 2, topY, baseLen, depth);
    } else if (selectedFractal === "Mandelbrot") {
      drawMandelbrot(p5);
    } else if (selectedFractal === "Koch") {
      drawKoch(p5);
    }
  };

  const drawTree = (p5, x, y, angleDeg, length, depth, branchAngle, lengthRatio) => {
    if (depth === 0 || length < 2) return;
    const x2 = x + length * Math.cos(p5.radians(angleDeg));
    const y2 = y + length * Math.sin(p5.radians(angleDeg));
    let headingColor = "#000";
    if (typeof window !== "undefined") {
      const h1 = document.querySelector("h1");
      if (h1) {
        headingColor = window.getComputedStyle(h1).color;
      }
    }
    p5.stroke(headingColor);
    p5.line(x, y, x2, y2);
    drawTree(p5, x2, y2, angleDeg - branchAngle, length * lengthRatio, depth - 1, branchAngle, lengthRatio);
    drawTree(p5, x2, y2, angleDeg + branchAngle, length * lengthRatio, depth - 1, branchAngle, lengthRatio);
  };

  const drawSierpinski = (p5, x, y, len, depth) => {
    const drawTriangle = (x, y, len) => {
      const h = (Math.sqrt(3) / 2) * len;
      p5.triangle(x, y, x - len / 2, y + h, x + len / 2, y + h);
    };
    const sierpinski = (x, y, len, d) => {
      if (d <= 0 || len < 10) {
        drawTriangle(x, y, len);
        return;
      }
      const h = (Math.sqrt(3) / 2) * len;
      sierpinski(x, y, len / 2, d - 1);
      sierpinski(x - len / 4, y + h / 2, len / 2, d - 1);
      sierpinski(x + len / 4, y + h / 2, len / 2, d - 1);
    };
    sierpinski(x, y, len, depth);
  };

  const drawMandelbrot = (p5) => {
    p5.loadPixels();
    const maxIter = 50;
    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        let a = p5.map(x, 0, p5.width, -2, 1);
        let b = p5.map(y, 0, p5.height, -1.5, 1.5);
        const ca = a;
        const cb = b;
        let n = 0;
        while (n < maxIter) {
          const aa = a * a - b * b;
          const bb = 2 * a * b;
          a = aa + ca;
          b = bb + cb;
          if (a * a + b * b > 16) break;
          n++;
        }
        const bright = p5.map(n, 0, maxIter, 0, 255);
        const pix = (x + y * p5.width) * 4;
        p5.pixels[pix + 0] = bright;
        p5.pixels[pix + 1] = bright;
        p5.pixels[pix + 2] = bright;
        p5.pixels[pix + 3] = 255;
      }
    }
    p5.updatePixels();
  };

  class KochSegment {
    constructor(p5, a, b) {
      this.p5 = p5;
      this.a = a;
      this.b = b;
    }
    show() {
      this.p5.stroke(0);
      this.p5.line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
    generate() {
      const { p5, a, b } = this;
      const v = p5.createVector(b.x - a.x, b.y - a.y);
      const oneThird = p5.createVector(a.x + v.x / 3, a.y + v.y / 3);
      const twoThird = p5.createVector(a.x + (2 * v.x) / 3, a.y + (2 * v.y) / 3);
      const angle = -Math.PI / 3;
      const middle = p5.createVector(twoThird.x - oneThird.x, twoThird.y - oneThird.y);
      const rotated = p5.createVector(
        middle.x * Math.cos(angle) - middle.y * Math.sin(angle),
        middle.x * Math.sin(angle) + middle.y * Math.cos(angle)
      );
      const peak = p5.createVector(oneThird.x + rotated.x, oneThird.y + rotated.y);
      return [
        new KochSegment(p5, a, oneThird),
        new KochSegment(p5, oneThird, peak),
        new KochSegment(p5, peak, twoThird),
        new KochSegment(p5, twoThird, b),
      ];
    }
  }

  const initKoch = (p5) => {
    const start = p5.createVector(50, canvasHeight / 2);
    const end = p5.createVector(canvasWidth - 50, canvasHeight / 2);
    const base = new KochSegment(p5, start, end);
    kochSegmentsRef.current = [base];
    const iterations = 4;
    for (let i = 0; i < iterations; i++) {
      const nextGen = [];
      kochSegmentsRef.current.forEach(seg => {
        nextGen.push(...seg.generate());
      });
      kochSegmentsRef.current = nextGen;
    }
  };

  const drawKoch = (p5) => {
    kochSegmentsRef.current.forEach(seg => seg.show());
  };

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      {isClient && (
        <Suspense fallback={<div>Loading fractal...</div>}>
          <Sketch setup={setup} draw={draw} />
        </Suspense>
      )}
    </div>
  );
};

export default FractalSketch;
