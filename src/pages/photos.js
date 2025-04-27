import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'


const images = [
  { url: '/photos/thames-kayak.jpg', title: 'Big Ben' },
  { url: '/photos/sunset-hoola.jpg', title: 'Calvin & Hobbs' },
  { url: '/photos/seagull.jpg', title: 'Mother earth' },
  { url: '/photos/seven-sisters.jpg', title: 'Girl' },
  { url: '/photos/cornwall.jpg', title: 'Colorful Skull' },
  { url: '/photos/paris-sunset.jpg', title: 'Joker' },
  { url: '/photos/rainy-day.jpg', title: 'Joker' },
  { url: '/photos/notting-hill.jpg', title: 'Joker' },
  { url: '/photos/sunset-hoola.jpg', title: 'Joker' },
  { url: '/photos/edi-2.jpg', title: 'Joker' },
  { url: '/photos/eiffel.jpg', title: 'Joker' },
  { url: '/photos/hyde-park.jpg', title: 'Joker' },
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
                  {/* <div>{image.title}</div> */}

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
