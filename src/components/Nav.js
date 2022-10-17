import React from 'react'
import './Nav.css'
import Avatar from '@mui/material/Avatar'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchIcon from '@mui/icons-material/Search'

function Nav() {
  return (
    <div className="nav">
      <div className="nav__left">
        <img
          src="https://www.last.fm/static/images/defaults/player_default_album.430223706b14.png"
          alt="Player"
        />
        <div className="nav__left__icons">
          <SkipPreviousIcon />
          <PlayCircleOutlineIcon className="playButton" />
          <SkipNextIcon />
          <FavoriteBorderIcon className="heartIcon" />
        </div>
      </div>
      <div className="nav__middle">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Lastfm_logo.svg"
          alt="Logo"
        />
      </div>
      <div className="nav__right">
        <SearchIcon />
        <div className="nav__right__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Live</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Charts</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
          </ul>
        </div>
        <Avatar />
      </div>
    </div>
  )
}

export default Nav
