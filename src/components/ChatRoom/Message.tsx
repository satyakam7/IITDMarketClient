import React from 'react';
import './Message.css';

const Message: React.FC = () => {
    return (
        <div className="text-message">
            <span className="text-message-username">USER: </span>
            <span>Message</span>
        </div>
    );
};

export default Message;
