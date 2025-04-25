import React, { useState } from 'react'
import { Link } from 'gatsby'
import { SocialIcon } from 'react-social-icons'

import floppy from '../assets/floppylogo.png'
import floppyLogo from '../assets/nav-floppy.png'
import blog from '../assets/nav-blog.png'
import projects from '../assets/nav-projects.png'
import github from '../assets/nav-github.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Menu } from '../assets/Menu'
import { Close } from '../assets/Close'

const links = [
  // { url: '/notes', label: 'Notes', image: null },
  { url: '/blog', label: 'Blog', image: null },
  { url: '/me', label: 'About', image: null },
]

// const links1 = [
//   { url: '/projects', label: '', image: github },
//   { url: '/me', label: '', image: floppy },
// ]


const socialLinks = [
  { url: 'https://github.com/rohitmungre' },
  { url: 'https://x.com/rohitmungre' },
]

export const Navigation = ({ handleUpdateTheme, theme }) => {
  const [navOpen, setNavOpen] = useState(false)

  const handleToggleMobileNav = () => {
    setNavOpen((prev) => !prev)
  }

  const handleCloseMobileNav = () => {
    setNavOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-content">
          <Link to="/" className="navbar-title-link">
            <span>Rohit Mungre</span>
          </Link>
        </div>
      </div>

      <div className="navbar-wrapper">
        <div className="navbar-container">
          <section className="navbar-section navbar-section-search" />
          <section className="navbar-section">
            <button
              className={`navbar-button nav-menu-button ${
                navOpen ? 'active' : ''
              }`}
              onClick={handleToggleMobileNav}
            >
              {navOpen ? <Close /> : <Menu />}
            </button>

            <nav className={`navbar-menu nav-items ${navOpen ? 'active' : ''}`}>
              {links.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  activeClassName="active"
                  onClick={handleCloseMobileNav}
                >
                  {link.image && <img src={link.image} alt={link.label} />}
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="navbar-menu social">
              {socialLinks.map((link) => (
                <SocialIcon
                  target="_blank"
                  key={link.url}
                  url={link.url}
                  fgColor="currentColor"
                  bgColor="transparent"
                  className="navbar-icon"
                />
              ))}
              <button
                className="navbar-button theme-switch-button"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'

                  handleUpdateTheme(newTheme)
                }}
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
            </nav>
          </section>
        </div>
      </div>
    </header>
  )
}
