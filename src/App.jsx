import { useState } from 'react'
import MessengerPlugin from './Messenger'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { MessengerChat,showMessenger,hideMessenger } from "react-messenger-chat-plugin";

function App() {
  return (
    <div style={{width:'100vw',height:'100vh',background:'gray'}}>
      <h1>MessengerChat</h1>
      {/* <MessengerChat
    pageId="109268111769502"
    language="sv_SE"
    themeColor={"#000000"}
    bottomSpacing={300}
    loggedInGreeting="loggedInGreeting"
    loggedOutGreeting="loggedOutGreeting"
    greetingDialogDisplay={"show"}
    debugMode={true}
    onMessengerShow={() => {
      console.log("onMessengerShow");
    }}
    onMessengerHide={() => {
      console.log("onMessengerHide");
    }}
    onMessengerDialogShow={() => {
      console.log("onMessengerDialogShow");
    }}
    onMessengerDialogHide={() => {
      console.log("onMessengerDialogHide");
    }}
    onMessengerMounted={() => {
      console.log("onMessengerMounted");
    }}
    onMessengerLoad={() => {
      console.log("onMessengerLoad");
    }}
  /> */}
      <MessengerPlugin/>
    </div>
  )
}

export default App
