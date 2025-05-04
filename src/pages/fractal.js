// src/pages/fractal.js
import React, { useState } from "react";
import FractalSketch from "../components/FractalSketch";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { Heading } from '../components/Heading'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function Fractal() {
    const title = 'Fractals';
    const [selectedFractal, setSelectedFractal] = useState("Tree");
  
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
            <h3>Choose a Fractal</h3>
                <select
                    value={selectedFractal}
                    onChange={(e) => setSelectedFractal(e.target.value)}
                    style={{ marginBottom: "20px", padding: "10px", fontSize: "16px" }}
                >
                    <option value="Tree">Tree</option>
                    <option value="Sierpinski">Sierpinski Triangle</option>
                    <option value="Mandelbrot">Mandelbrot Set</option>
                    <option value="Koch">Koch Curve</option>
                </select>

                <FractalSketch selectedFractal={selectedFractal} />

          </div>
        </PageLayout>
      </>
    )
  }
  
Fractal.Layout = Layout
