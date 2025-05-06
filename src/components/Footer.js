import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import gatsby from '../assets/gatsby.png'
import github from '../assets/nav-github.png'

const links = [
  { url: 'https://rohitmungre.substack.com', label: 'Email signup' },
  // { url: 'https://www.rohitmungre.com/rss.xml', label: 'RSS feed' },
  { url: 'https://x.com/rohitmungre', label: 'Twitter' },
  { url: 'https://ko-fi.com/rohitmungre', label: 'Buy me a coffee' },
]
const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org', label: 'Gatsby', icon: gatsby },
  { url: 'https://github.com/rohitmungre', label: 'GitHub', icon: github },
]

export const Footer = () => {
  const scrollToTop = () => {
    const duration = 1000; // in milliseconds
    const start = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (t) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, start * (1 - ease));

      if (elapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };


  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "MMMM D, YYYY [at] h:mm A [UTC]")
      }
    }
  `)

  return (
    <footer className="footer">
      <section className="footer-section">

        <div className="footer-item">
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
          <div className="footer-item-right">
            <a href="#" onclick="scrollToTop(); return false;" class="back-to-top">↑ Back to Top</a>
          </div>
        </div>

        <div className="footer-item">
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
        </div> 

        <div className="footer-item">
          <div className="footer-item-left">
            Made with ❤️ & ☕ by Rohit Mungre
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-left">
            Template by <a href="https://github.com/taniarascia">Tania Rascia</a>
          </div>
        </div>

        <div className="footer-item">
          <div className="footer-item-left">
            Last build: {data.site.buildTime}
          </div>
        </div>

      </section>
    </footer>
  )
}
