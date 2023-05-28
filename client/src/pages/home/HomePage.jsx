import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const[roomCode , setroomCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/room/${roomCode}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Enter Room Code</label>
            <input value={roomCode} onChange={(e) => setroomCode(e.target.value)} placeholder='Enter Room Code' type='text'/>
        </div>
      <button type='submit'>Enter Room</button>
      </form>
    </div>
  )
}

export default HomePage
