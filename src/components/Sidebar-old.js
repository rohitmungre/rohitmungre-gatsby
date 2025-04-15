import React from 'react'
import { Link } from 'gatsby'

import floppyLogo from '../assets/nav-floppy.png'

export const Sidebar = () => {
 
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <Link to="/" className="sidebar-title-link">
            <span>
              <img
                src={floppyLogo}
                className="sidebar-logo"
                alt="tania.dev"
                title="💾"
              />
            </span>
            <span>tania.dev</span>
          </Link>
        </div>
        <div className="sidebar-container">
          <section className="sidebar-section">
            <h2>About Me</h2>
            <div className="sidebar-content">
              <p>
                I'm <Link to="/me">Tania</Link>, software engineer and
                open-source creator. This is my digital garden. 🌱
              </p>
            </div>
          </section>
        </div>
      </div>
    </aside>
  )
}
