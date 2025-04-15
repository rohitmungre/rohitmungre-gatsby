import * as React from "react"
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'


const IndexPage = () => {
  return (
    <main>
        <Hero title="Hey, I'm Tania!" type="index">
          <div className="hero-wrapper">
            <div>
              <p className="hero-description">
                I'm a software engineer, open-source creator, and former
                professional chef. I've been making websites since 1998 and{' '}
                <Link to="/blog">writing on this blog</Link> for the past
                decade.
              </p>
              <p className="hero-description">
                I enjoy weight-lifting, reading sci-fi and fantasy, playing
                retro video games, and spending time with my partner and
                friends.
              </p>
              <p className="flex gap">
                <Link className="button" to="/me">
                  About Me
                </Link>
                <a
                  className="button"
                  href="https://taniarascia.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsletter
                </a>
              </p>
            </div>
            <div>
              <img src="/dp.jpg" className="hero-image" alt="RAM Ram" />
            </div>
          </div>
        </Hero>

      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default IndexPage

IndexPage.Layout = Layout

export const Head = () => <title>Home Page</title>
