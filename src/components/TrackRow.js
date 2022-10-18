import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './TrackRow.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'

function TrackRow({ fetchUrl }) {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setTracks(Object.entries(request.data.topalbums.album))
      return request
    }
    fetchData()
  }, [fetchUrl])
  return (
    <div className="trackRow">
      {tracks.map(track => (
        <div
          key={track[0]}
          style={{
            backgroundImage: `url('${track[1].image[3]['#text']}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center center'
          }}
          className="trackRow__track"
        >
          {track[1].image[3]['#text'] && (
            <div className="trackRow__info">
              <PlayCircleOutlineIcon />
              <h4>{track[1].name}</h4>
              <h6>{track[1].artist.name}</h6>
              <p> {track[1].playcount.toLocaleString()} listeners</p>
              <RadioButtonCheckedIcon className="album__icon" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TrackRow
