import { useState } from 'react'
import MessengerPlugin from './Messenger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width:'100vw',height:'100vh',background:'green'}}>
      <h1>messenger</h1>

     <MessengerPlugin
     showMsngr
     />
    </div>

  )
}

export default App
