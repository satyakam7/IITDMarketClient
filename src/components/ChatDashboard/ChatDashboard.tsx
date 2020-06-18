import React from 'react';
import ChatCard from './ChatCard';
import './Chats.css';

const ChatDashboard: React.FC = () => {
    return (
        <div className="chat-dashboard">
            <ChatCard />
        </div>
    );
};

export default ChatDashboard;
