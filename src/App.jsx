import { useState } from 'react'
import MessengerPlugin from './Messenger'

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'gray'}}>
      <h1>MessengerChat</h1>
    <MessengerPlugin/>
    </div>
  )
}

export default App
