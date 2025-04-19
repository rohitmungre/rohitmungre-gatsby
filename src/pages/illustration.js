import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

const images = [
  { url: '/art/bigben.jpg', title: 'Big Ben' },
  { url: '/art/calvin.jpg', title: 'Calvin & Hobbs' },
  { url: '/art/girl.jpg', title: 'Girl' },
  { url: '/art/joker.jpg', title: 'Joker' },
  { url: '/art/skull.jpg', title: 'Colorful Skull' },
  { url: '/art/earth.jpg', title: 'Mother earth' },
]

export default function Illustration() {
  const title = 'Art'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero
          title={title}
          description="I don't draw much, but here's a few illustrations."
        />

        <div className="cards">
          {images.map((image) => {
            return (
              <div className="card" key={image.url}>
                <a href={image.url} target="_blank" rel="noreferrer">
                  <div>{image.title}</div>

                  <div
                    className="image-thumbnail"
                    style={{ backgroundImage: `url('${image.url}')` }}
                    alt={image.title}
                  />
                </a>
              </div>
            )
          })}
        </div>
      </PageLayout>
    </>
  )
}

Illustration.Layout = Layout
