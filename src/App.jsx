import { useState } from 'react'
import MessengerPlugin from './Messenger'
import { MessengerChat } from "react-messenger-chat-plugin";

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'green'}}>
      <h1>messenger</h1>
      <MessengerChat
    pageId="100087453825879"
    language="en_US"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
  />,
    </div>

  )
}

export default App
