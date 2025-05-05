import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'
import { projectsList } from '../data/projectsList'


export default function Projects() {
  const title = 'Labs'
  const description =
    'My UI experiments - visualizations, trading charts, & animations.'

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
