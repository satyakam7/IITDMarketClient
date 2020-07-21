import React from 'react';
import './Message.css';

const Message: React.FC = () => {
    return (
        <div className="text-message">
            <span className="text-message-username">USER: </span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis quaerat eveniet pariatur impedit hic soluta in
                recusandae nesciunt consectetur dolores! Quisquam vitae in
                dignissimos. Atque eligendi ratione consequatur qui! Nihil!
            </span>
        </div>
    );
};

export default Message;
