import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import './Navbar.css'

function Navbar() {
        const [showNav, setShowNav] = useState(false);
        return (
          <div>
            <div
              className="mobile-menu-icon"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdMenu />
            </div>
      
            <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
              <div
                className="closeNavIcon"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
              >
                <MdClose />
              </div>
              <li>
                <NavLink
                  to="/"
                  exact
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setShowNav(!showNav)}
                  role="button"
                  onKeyDown={() => setShowNav(!showNav)}
                  tabIndex={0}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
    )
}

export default Navbar
