import robotImage from '../../assets/Images/robot.png'
import userImage from '../../assets/Images/reze.jpg'

import "./ChatMessage.css"
const ChatMessage = ({Message, sender, time}) => {
        return (
          <div className={sender ==='user' ? 'chat-message-user ' : 'chat-message-robot'}>
            {sender === "robot" && (
              <img src={robotImage} />
            )}
              <div className="chat-message-text">
                {Message}
                <p className="para-time">{time}</p>
              </div>
            {sender === "user" && (
              <img src={userImage} />
            )}
          </div>
        )
      }

export default ChatMessage;