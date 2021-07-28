import React, {useState} from 'react'

const Update = ({songs, song, setSongs}) => {
  const initialState = {
    song: ''
  }

  const [form, setForm] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    fetch(`http://localhost:8000/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) 
    })
    .then(res => res.json())
    .then(setSongs(songs.map(s => {
      if (song.song === s.song) {
        s.song = form.song
      }
      return s
    })))
    // .then(song => setSongs([...songs, song]))
    setForm(initialState)
  }

  const handleChange = (event) => {
    setForm({...song, [event.target.id]: event.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song">Song</label>
        <input type="text" id="song" onChange={handleChange} value={form.song} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Update
