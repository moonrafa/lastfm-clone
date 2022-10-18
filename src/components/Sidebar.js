import React from 'react'
import './Sidebar.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <PlayCircleOutlineIcon />
          <a href="#library"> Play your library</a>
        </li>
        <li>
          <PlayCircleOutlineIcon />
          <a href="#mix"> Play your mix</a>
        </li>
        <li>
          <PlayCircleOutlineIcon />
          <a href="#rec"> Play your recommendations</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
