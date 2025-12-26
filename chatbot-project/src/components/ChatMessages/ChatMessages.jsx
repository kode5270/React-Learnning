import { useEffect, useRef } from "react";
import ChatMessage from "../ChatMessage";
import "./ChatMessages.css"

      //Create our hooks >_<
function useAutoScroll(dependencies){
        const containerRef = useRef(null);
        useEffect(() => {
            const containerElem =  containerRef.current;
            if(containerElem){
              containerElem.scrollTop = containerElem.scrollHeight;
            }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },dependencies);

        return containerRef;
}
      
const ChatMessages = ({chatMessages,setChatMessages}) => {
        const chatMessagesRef = useAutoScroll([chatMessages])
        return(
          <div className={chatMessages.length === 0 ? "chat-messages-0-container" : "chat-messages-container"}
            
                ref={chatMessagesRef}>
                    <p className="welcome-text">
                    {
                    chatMessages.length === 0 ? "Welcome to my chatbot" : ""
                    }
                    </p>
                        {chatMessages.map((chatMessages) => (
                            <ChatMessage 
                            key={chatMessages.id}
                            Message={chatMessages.Message} 
                            sender={chatMessages.sender} 
                            time={chatMessages.time}
                            />
                        ))
            }
          </div>
        )
    }

export default ChatMessages;