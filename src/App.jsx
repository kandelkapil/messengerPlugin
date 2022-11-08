import { useState } from 'react'
import MessengerPlugin from './Messenger'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'gray'}}>
      <h1>MessengerChat</h1>
      {/* <MessengerCustomerChat
        pageId="100087453825879"
        appId="436820911941202"
      /> */}
      <MessengerPlugin/>
    </div>
  )
}

export default App
