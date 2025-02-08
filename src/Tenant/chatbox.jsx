import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { MdOutlineVerified, MdSend } from 'react-icons/md';
import Avatar from '@mui/material/Avatar';
import './chatbox.css'


const ChatPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      text: "Hello, how can I help you?", 
      sender: "landlord", 
      timestamp: new Date(),
      user: { name: "Ram Singh", role: "landlord" }
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage = {
      text: input,
      sender: "tenant",
      timestamp: new Date(),
      user: { name: "You", role: "tenant" }
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="user-profile">
          <Avatar src="" />
          <div className="user-info">
            <h4>
              Ram Singh 
              <MdOutlineVerified className="verified-icon" />
            </h4>
            <p className="user-role">Landlord</p>
          </div>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.sender}`}>
            
            <div className="message-content">{msg.text}</div>
            <div className="message-header">
              <span className="message-time"> {format(msg.timestamp, 'HH:mm')} </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <div className="input-wrapper">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button 
            onClick={sendMessage} 
            className="send-button"
            disabled={!input.trim()}
          >
            <MdSend className="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;