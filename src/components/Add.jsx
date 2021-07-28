import React, {useState} from 'react'

const Add = ({songs, setSongs}) => {
  const initialState = {
    song: '',
    number: ''
  }

  const [form, setForm] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(form)
    fetch(`http://localhost:8000/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form) 
    })
    .then(res => res.json())
    .then(song => setSongs([...songs, song]))
    setForm(initialState)
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.id]: event.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="song">Song</label>
        <input type="text" id="song" onChange={handleChange} />
        <label htmlFor="number">ID: </label>
        <input type="number" id="number" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Add
