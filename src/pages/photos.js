import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'


const images = [
  { url: '/photos/thames-kayak.jpg', title: 'Kayaking on the Thames' },
  { url: '/photos/sunset-hoola.jpg', title: 'Sunset at O2' },
  { url: '/photos/seagull.jpg', title: 'Sunny afternoon' },
  { url: '/photos/seven-sisters.jpg', title: 'Seven Sisters' },
  { url: '/photos/cornwall.jpg', title: 'Minack Theatre' },
  { url: '/photos/paris-sunset.jpg', title: 'Eiffel at Sunset' },
  { url: '/photos/rainy-day.jpg', title: 'Canary Wharf' },
  { url: '/photos/notting-hill.jpg', title: 'Notting Hill' },
  { url: '/photos/rajwada.jpg', title: 'Indore Rajwada' },
  { url: '/photos/edi-2.jpg', title: 'Edinburgh Monument' },
  { url: '/photos/eiffel.jpg', title: 'Illuminated Eiffel' },
  { url: '/photos/hyde-park.jpg', title: 'Hyde Park' },
]


export default function Photos() {
  const title = 'Photos'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero
          title={title}
          description={
            <>
              Below are a few selected photographs of mine over the years. <br /> For more recent updates, feel free to follow me on{' '}
              <a
                href="https://instagram.com/rohitmungre"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>.
            </>
          }
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

Photos.Layout = Layout
