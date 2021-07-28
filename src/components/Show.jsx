import React, {useState, useEffect} from 'react'
import Delete from './Delete'
import Update from './Update'
import Add from './Add'

const Show = () => {
  // const faveBlueWeekendSongs = [
  //   {id: 1, song: 'Delicious Things'},
  //   {id: 2, song: 'Smile'}, 
  //   {id: 3, song: 'Play The Greatest Hits'},
  //   {id: 4, song: 'The Beach'}
  // ]

  const [songs, setSongs] = useState()

  useEffect(() => {
    fetch(`http://localhost:8000/`)
    .then(res => res.json())
    .then(songs => setSongs(songs))
  }, []) 

  function deleteSong(id) {
    fetch(`http://localhost:8000/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(() => fetch(`http://localhost:8000/`).then(res => res.json()).then(res => setSongs(res)))
  }

  return (
    <div>
      { songs ?
        songs.map((song) => (
          <div className="song-card" key={song._id}>
            <h1>{song.song}</h1>
            <p>This is my #{song.number} from their Blue Weekend Album</p>
            <Delete song={song} deleteSong={deleteSong} />
            <Update songs={songs} song={song} setSongs={setSongs} />
          </div>
        ))
      : ``}
    <Add songs={songs} setSongs={setSongs} />
    </div>
  )
}

export default Show
