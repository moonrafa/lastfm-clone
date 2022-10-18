import React from 'react'
import Sidebar from './Sidebar'
import TrackRow from './TrackRow'
import './Homescreen.css'
import requests from '../Requests'

function Homescreen() {
  return (
    <div className="homescreen">
      <TrackRow fetchUrl={requests.fetchTopAlbums} />
      {/* <TrackRow fetchUrl={requests.fetchChartTopArtists} /> */}
      <Sidebar />
    </div>
  )
}

export default Homescreen
