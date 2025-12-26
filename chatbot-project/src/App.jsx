import {useEffect, useState } from 'react';
import './App.css'
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';

      

      
      
const App = () => {
        //State hook has 2 parts: 1. variable, 2. function to update the variable!!!
        //const [chatMessages, setChatMessages] = Array; 
        // const chatMessages = Array[0];
        // const setChatMessages = Array[1];
        const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages'))||[]);    
      
        useEffect(() => {
            Chatbot.addResponses({
            "goodbye":"Yeah, Good Luck Nigga!!",
            "give me an id" : () => {
                  return `Sure! here's the id ${crypto.randomUUID()}`
            },
            "show me a love" : `Here it is ❤️`
            })
        },[])
        useEffect(() =>{
            localStorage.setItem('messages',JSON.stringify(chatMessages))
        })
       return (
        <div className="app-container">
         
         <ChatMessages 
          chatMessages={chatMessages} 
          setChatMessages={setChatMessages}
         />
         <ChatInput 
          chatMessages={chatMessages} 
          setChatMessages={setChatMessages} 
          ClassName="chat-input-container"
         />
        </div>
       )
      }

export default App
