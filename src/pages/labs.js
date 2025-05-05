import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

import tictactoeThumb from '../../content/labs/SSTTT2.png';
import animationThumb from '../../content/labs/SSAnimation.png';
import fractalThumb from '../../content/labs/SSFractal1.png';
import polarClockThumb from '../../content/labs/SSPolarClock.png';
import tvChartThumb from '../../content/labs/SSTVChart.png';
import tvheatmapThumb from '../../content/labs/SSTVHeatmap.png';

export default function Projects() {
  const title = 'Labs'
  const description =
    'My UI experiments - visualizations, trading charts, & animations.'

  const projectsList = [
    {
      slug: 'tvchart',
      name: 'Symbol Advanced Chart',
      tagline: 'Embed TradingView advanced real-time stock charts.',
      date: '2025-04-28',
      demo: '/tvchart',
      thumbnail: tvChartThumb,
    },
    {
      slug: 'tvheatmap',
      name: 'Stock Market Heatmap',
      tagline: 'Stock market heatmap visualization with live performance.',
      date: '2025-04-27',
      demo: '/tvheatmap',
      thumbnail: tvheatmapThumb,
    },
      {
        slug: 'fractals',
        name: 'Fractals Playground',
        tagline: 'Interactive fractals like Sierpinski triangle and tree, powered by p5.js.',
        date: '2025-04-25',
        demo: '/fractal',
        thumbnail: fractalThumb,
      },
      {
        slug: 'polar-clock',
        name: 'Polar Clock Visualization',
        tagline: 'A dynamic polar clock that visualizes time using circular arcs.',
        date: '2025-04-24',
        demo: '/pclock',
        thumbnail: polarClockThumb,
      },
      {
        slug: 'lottie',
        name: 'Lottie Animation',
        tagline: 'Render Lottie JSON animations using lottie-react.',
        date: '2025-04-10',
        demo: '/lottie',
        thumbnail: animationThumb,
      },  
      {
        slug: 'tictactoe',
        name: 'Tic Tac Toe',
        tagline: 'A simple Tic Tac Toe game built with React and styled components.',
        date: '2025-03-26',
        demo: '/ttt',
        thumbnail: tictactoeThumb,
      },
  ]

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero title={title} description={description} />

        <div className="cards">
          {projectsList.map((project) => (
            <div className="card" key={project.slug}>
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '0.75rem',
                  }}
                />
              )}
              <time>{project.date}</time>
              <div className="card-header"><strong>{project.name}</strong></div>
              <p>{project.tagline}</p>
              <div className="card-links">
                {project.demo && (
                  <Link className="button small" to={project.demo}>
                    Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  )
}

Projects.Layout = Layout
