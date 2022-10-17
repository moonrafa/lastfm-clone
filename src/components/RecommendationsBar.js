import React, { useState } from 'react'
import './RecommendationsBar.css'

function RecommendationsBar() {
  const [activeLink, setActiveLink] = useState('all')
  return (
    <div className="recommendationsBar">
      <ul>
        <li className={activeLink === 'all' ? 'activeLink' : ''}>
          <a id="all" href="#all" onClick={() => setActiveLink('all')}>
            All Recommendations
          </a>
        </li>
        <li className={activeLink === 'artists' ? 'activeLink' : ''}>
          <a
            id="artists "
            href="#artists"
            onClick={() => setActiveLink('artists')}
          >
            Artists
          </a>
        </li>
        <li className={activeLink === 'albums' ? 'activeLink' : ''}>
          <a id="albums" href="#albums" onClick={() => setActiveLink('albums')}>
            Albums
          </a>
        </li>
        <li className={activeLink === 'tracks' ? 'activeLink' : ''}>
          <a id="tracks" href="#tracks" onClick={() => setActiveLink('tracks')}>
            Tracks
          </a>
        </li>
        <li className={activeLink === 'events' ? 'activeLink' : ''}>
          <a id="events" href="#events" onClick={() => setActiveLink('events')}>
            Events
          </a>
        </li>
      </ul>
    </div>
  )
}

export default RecommendationsBar
