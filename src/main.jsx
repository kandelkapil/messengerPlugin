import React from 'react'
import ReactDOM from 'react-dom/client'
import { MessengerChat,showMessenger,hideMessenger } from "react-messenger-chat-plugin";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
      <MessengerChat
    pageId="109268111769502"
    language="sv_SE"
    themeColor={"#3b5bdb"}
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
  /> 
    // <App />
)
