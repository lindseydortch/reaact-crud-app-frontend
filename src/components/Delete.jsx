import React from 'react'

const Delete = ({song, deleteSong}) => {
  return (
    <button className="btn" onClick={() => deleteSong(song)} >Delete</button>
  )
}

export default Delete
