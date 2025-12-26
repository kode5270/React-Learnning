import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loadingSpinner from '../../assets/Images/loadingSpinner.gif'
import "./ChatInput.css"
import dayjs from "dayjs";
const ChatInput = ({chatMessages,setChatMessages}) => {
        const [inputText, setInputText] = useState('');
        const time = dayjs().format("HH:mm");
        const handleInputChange =(event) => {
          // e is event object And even.target is given to access the element that triggered the event in here input box.'
          setInputText(event.target.value);
        };
        const handleClearMessage = () => {
          setChatMessages([])
        }
        
        const handleSendMessage = async () => {
          
          const newChatbotMessages = [...chatMessages, {
            id: crypto.randomUUID(),
            Message: inputText,
            sender: "user",
            time: time
          }]
          setChatMessages(newChatbotMessages);

          setInputText('');

          //We add feature Loading for chatbot respons,before actual response is received...
          setChatMessages([
            ...newChatbotMessages,
            {
            id: crypto.randomUUID(),
            Message:<img className="images-loading" src={loadingSpinner} />,
            sender: "robot",
            time: ""
            }
          ]);
            
          const response = await Chatbot.getResponseAsync(inputText);
          
          setChatMessages([
            ...newChatbotMessages,{
              id: crypto.randomUUID(),
              Message: response,
              sender: "robot",
              time: time
            }
          ])
        };
        
        return (
          <div className="chat-input-container">
              <input 
                type="text"
                name="Chatbot"
                id="Chatbot" 
                placeholder="Type your message..." 
                onChange={handleInputChange}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSendMessage();
                  }
                  else if(event.key ==='Escape'){
                    setInputText('');
                  }
                }}
                value={inputText}
                className="chat-input"
                />
              <button
                onClick ={handleSendMessage}
                className="send-button"
              > Send </button>
              <button
                onClick ={handleClearMessage}
                className="send-button"
              > Clear </button>
              
          </div>
        );
      };

      export default ChatInput;
