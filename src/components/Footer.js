import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'https://rohitmungre.substack.com', label: 'Email signup' },
  { url: 'https://www.rohitmungre.com/rss.xml', label: 'RSS feed' },
  { url: 'https://x.com/rohitmungre', label: 'Twitter' },
  { url: 'https://ko-fi.com/rohitmungre', label: 'Buy me a coffee' },
]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/rohitmungre', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "MMMM D, YYYY [at] h:mm A")
      }
    }
  `)

  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu">
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="footer-menu-buttons">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
              className="button small"
            >
              <img src={link.icon} alt={link.label} />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
                
        <div className="footer-build-time">
          Last build: {data.site.buildTime}
        </div>
        
        <div className="footer-made-by">
          Made with ❤️ & ☕ by Rohit Mungre
        </div>

        <div className="footer-made-by">
          Based on a template by <a href="https://github.com/taniarascia/taniarascia.com" target="_blank" rel="noopener noreferrer">Tania Rascia</a>
        </div>

        <div className="footer-made-by">© 2013-2025 Rohit Mungre</div>

      </section>
    </footer>
  )
}
