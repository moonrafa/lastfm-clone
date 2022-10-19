import React from 'react'
import './Sidebar.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayArrow'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__library">
        <PlayCircleOutlineIcon />
        <a href="#library"> Play your library</a>
      </div>
      <div className="sidebar__mix">
        <PlayCircleOutlineIcon />
        <a href="#mix"> Play your mix</a>
      </div>
      <div className="sidebar__recommendations">
        <PlayCircleOutlineIcon />
        <a href="#rec"> Play your recommendations</a>
      </div>
    </div>
  )
}

export default Sidebar
