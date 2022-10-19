import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './TrackRow.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircle'
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
      {tracks.map(
        track =>
          track[1].image[3]['#text'] && (
            <div
              key={track[0]}
              style={{
                backgroundImage: `url('${track[1].image[3]['#text']}')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat'
              }}
              className="trackRow__track"
            >
              <div className="trackRow__info">
                <PlayCircleOutlineIcon className="play__button" />
                <h4>{track[1].name}</h4>
                <h5>{track[1].artist.name}</h5>
                <h6> {track[1].playcount.toLocaleString()} listeners</h6>
                <RadioButtonCheckedIcon className="album__icon" />
              </div>
              <div className="trackRow__similar">
                <p>
                  Similar to <span>Moon Byul</span>, <span>MAMAMOO</span> and
                  <span> Solar</span>
                </p>
              </div>
            </div>
          )
      )}
    </div>
  )
}

export default TrackRow
