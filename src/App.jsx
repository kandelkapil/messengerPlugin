import { useState } from 'react'
import MessengerPlugin from './Messenger'
import { MessengerChat} from "react-messenger-chat-plugin";

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'gray'}}>
      <h1>messenger changes</h1>
      <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
    </div>

  )
}

export default App
