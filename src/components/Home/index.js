import {AiOutlineClose, AiFillHome, AiOutlineSearch} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home">
      <div className="sidebar">
        <ul className="sidebar-options-list">
          <li className="sidebar-option-cont">
            <AiFillHome size="20" color="#ff0b37" />
            <p className="option-name">Home</p>
          </li>

          <li className="sidebar-option-cont">
            <HiFire size="20" />
            <p className="option-name">Trending</p>
          </li>
        </ul>
      </div>

      <div className="home-cont" data-testid="home">
        <div className="banner-cont" data-testid="banner">
          {/* eslint-disable-next-line */}
          <button type="button" data-testid="close" className="close-icon">
            <AiOutlineClose className="close-ico" />
          </button>
          <img
            alt="nxt watch logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="nxt-watch-logo"
          />
          <p>Buy Nxt watch Premium prepaid plans with UPI</p>
          <button className="get-btn" type="button">
            GET IT NOW
          </button>
        </div>
        <div className="search-input-cont">
          <input type="search" placeholder="Search" className="search-input" />
          {/* eslint-disable-next-line */}
          <button type="button" className="search-btn">
            <AiOutlineSearch size="20" />
          </button>
        </div>
      </div>
    </div>
  </>
)

export default Home
