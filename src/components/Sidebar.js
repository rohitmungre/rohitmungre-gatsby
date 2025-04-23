import React from 'react'
import { Link } from 'gatsby'

import floppy from '../assets/luffy.png'
import book from '../../content/thumbnails/book.svg'
import run from '../../content/thumbnails/run.svg'
import gaming from '../../content/thumbnails/gaming.svg'
import search from '../../content/thumbnails/search.svg'
import oil from '../../content/thumbnails/oil.svg'
import python from '../../content/thumbnails/python.svg'
import sync from '../../content/thumbnails/sync.svg'
import windows from '../../content/thumbnails/windows.svg'
import programming from '../../content/thumbnails/programming.svg'
import gallery from '../../content/thumbnails/gallery.png'
import pc from '../../content/thumbnails/computer.png'
import twitter from '../../content/thumbnails/twitter.svg'
import rss from '../../content/thumbnails/rss.svg'
import newsletter from '../../content/thumbnails/newsletter.svg'

import floppyLogo from '../assets/happy.svg'

export const Sidebar = () => {
  const guides = [
    {
      url: '/modern%20python%20applications',
      title: 'Modern Python Apps',
      icon: python,
    },
    {
      url: '/asynchronous',
      title: 'Async programming',
      icon: sync,
    },
    {
      url: '/wsl%20setup',
      title: 'WSL Setup for Devs',
      icon: windows,
    },
    {
      url: '/topics',
      title: 'All Topics',
    },
  ]

  const projectWriteups = [
    {
      url: '/oil',
      title: 'Oil markets',
      icon: oil,
    },
    {
      url: '/gaming%20industry/',
      title: 'Gaming industry',
      icon: gaming,
    },
    {
      url: '/weight%20loss/',
      title: 'Losing 31 kilograms',
      icon: run,
    },
    {
      url: '/startup%20vs%20phd/',
      title: 'Starting up v/s PhD',
      icon: search,
    },
  ]
  const funStuff = [
    {
      url: '/photos',
      title: 'Gallery',
      icon: gallery,
    },
    {
      url: '/illustration',
      title: 'Art',
      icon: pc,
    },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <Link to="/" className="sidebar-title-link">
            <span>
              <img
                src={floppyLogo}
                className="sidebar-logo"
                alt="rohitmungre"
                title="💾"
              />
            </span>
            <span>Rohit Mungre</span>
          </Link>
        </div>
        <div className="sidebar-container">
          <section className="sidebar-section">
            <h2>About Me</h2>
            <div className="sidebar-content">
              <p>
                I'm <Link to="/me">Rohit</Link>, software engineer and
                creator. This is my digital garden. 🌱
              </p>
            </div>
          </section>

          <section className="sidebar-section">
            <h2>Writeups</h2>
            <nav className="sidebar-menu">
              {projectWriteups.map((link) => (
                <Link key={link.url} to={link.url} activeClassName="active">
                  {link.icon && <img src={link.icon} alt={link.title} />}
                  {link.title}
                </Link>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2>Guides</h2>
            <nav className="sidebar-menu">
              {guides.map((link) => (
                <Link key={link.url} to={link.url} activeClassName="active">
                  {link.icon ? (
                    <img src={link.icon} alt={link.title} />
                  ) : (
                    <div style={{ height: '16px', width: '16px' }} />
                  )}
                  {link.title}
                </Link>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2>Fun Stuff</h2>
            <nav className="sidebar-menu">
              {funStuff.map((link) => (
                <Link key={link.url} to={link.url} activeClassName="active">
                  {link.icon && <img src={link.icon} alt={link.title} />}
                  {link.title}
                </Link>
              ))}
            </nav>
          </section>

          <section className="sidebar-section">
            <h2>Stay Connected</h2>
            <p className="sidebar-links">
              <a
                href="https://rohitmungre.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={newsletter} alt="Email Newsletter" />
                Newsletter
              </a>
              <a
                href="https://x.com/rohitmungre"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
                Twitter
              </a>
              <a href="/rss.xml">
                <img src={rss} alt="RSS" />
                RSS Feed
              </a>
            </p>
          </section>
          
        </div>
      </div>
    </aside>
  )
}
