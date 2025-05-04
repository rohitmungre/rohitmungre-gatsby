// src/pages/fractal.js
import React, { useState } from "react";
import FractalSketch from "../components/FractalSketch";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function Fractal() {
    const title = 'Fractals';
    const [selectedFractal, setSelectedFractal] = useState("Tree");
  
    const [treeConfig, setTreeConfig] = useState({
        depth: 10,
        angle: 40,
        lengthRatio: 0.67,
        startLength: 150,
      });

    const [sierpinskiConfig, setSierpinskiConfig] = useState({
        depth: 5
    });
      
    const fractalDescriptions = {
        Tree: "A recursive binary tree fractal mimicking natural tree growth.",
        Sierpinski: "A triangle recursively subdivided into smaller equilateral triangles.",
        Mandelbrot: "A set of complex numbers producing a famous infinite fractal shape.",
        Koch: "A snowflake-like fractal built by recursively modifying line segments.",
    };
      

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <p>A fractal is a never-ending pattern that repeats itself across different scales.</p>
          <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <select
                value={selectedFractal}
                onChange={(e) => setSelectedFractal(e.target.value)}
                style={{ padding: "8px", fontSize: "16px" }}
            >
                <option value="Tree">Tree</option>
                <option value="Sierpinski">Sierpinski Triangle</option>
            </select>

            <p style={{margin: 0 }}>
                Choose a fractal
            </p>
        </div>

                <p style={{ fontStyle: "italic", marginTop: "10px" }}>
                    {fractalDescriptions[selectedFractal]}
                </p>

                {selectedFractal === "Tree" && (
                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                    <label>
                        <strong>Depth:</strong>
                        <input
                        type="range"
                        min={1}
                        max={12}
                        value={treeConfig.depth}
                        onChange={(e) => setTreeConfig({ ...treeConfig, depth: +e.target.value })}
                        />
                        <span style={{ marginLeft: "10px" }}>{treeConfig.depth}</span>
                        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
                        Number of recursive levels. Higher values create more detailed trees.
                        </p>
                    </label>

                    <label>
                        <strong>Angle:</strong>
                        <input
                        type="range"
                        min={5}
                        max={60}
                        value={treeConfig.angle}
                        onChange={(e) => setTreeConfig({ ...treeConfig, angle: +e.target.value })}
                        />
                        <span style={{ marginLeft: "10px" }}>{treeConfig.angle}°</span>
                        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
                        The angle between branches. Smaller angles make the tree narrower.
                        </p>
                    </label>

                    <label>
                        <strong>Length Ratio:</strong>
                        <input
                        type="range"
                        min={0.4}
                        max={0.9}
                        step={0.01}
                        value={treeConfig.lengthRatio}
                        onChange={(e) => setTreeConfig({ ...treeConfig, lengthRatio: +e.target.value })}
                        />
                        <span style={{ marginLeft: "10px" }}>{treeConfig.lengthRatio}</span>
                        <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
                        Ratio that controls how much shorter each child branch is compared to its parent.
                        </p>
                    </label>
                </div>
            )}


            {selectedFractal === "Sierpinski" && (

                <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label>
                    <strong>Depth:</strong>
                    <input
                    type="range"
                    min={1}
                    max={12}
                    value={sierpinskiConfig.depth}
                    onChange={(e) => setSierpinskiConfig({ ...sierpinskiConfig, depth: +e.target.value })}
                    />
                    <span style={{ marginLeft: "10px" }}>{sierpinskiConfig.depth}</span>
                    <p style={{ fontSize: "0.85rem", color: "#666", marginTop: "4px" }}>
                    Number of recursive levels. Higher values create more detailed triangles.
                    </p>
                </label>
                </div>
            )}

            <FractalSketch
            selectedFractal={selectedFractal}
            treeConfig={treeConfig}
            sierpinskiConfig={sierpinskiConfig}
            />

          </div>
        </PageLayout>
      </>
    )
  }
  
Fractal.Layout = Layout
