// import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {GiHamburgerMenu} from 'react-icons/gi'

import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = () => (
  <nav className="header-cont">
    <img
      alt="nxt watch logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      className="website-logo"
    />
    <div className="options-cont">
      {/* eslint-disable-next-line */}
      <button data-testid="theme" className="theme" type="button">
        <FaMoon size="20" />
      </button>
      {/* eslint-disable-next-line */}
      <button className="ham" type="button">
        <GiHamburgerMenu size="20" />
      </button>
      {/* eslint-disable-next-line */}
      <img
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        className="profile"
      />
      {/* eslint-disable-next-line */}
      <button className="logout" type="button">
        <FiLogOut size="20" />
      </button>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
