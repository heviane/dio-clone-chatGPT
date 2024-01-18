import React from 'react';
import './ChatMessage.css';
import Avatar from '../../assets/avatar';

// Functional Component
/* Object properties:
    user ( user | chatGPT )
    Message - onde vai estar o prompt 
    {
        user: "gpt",
        message: "Crie o nome de um artigo"
    }
*/
export const ChatMessage = ( {message} ) => {
    return (
        // dinamic class 
        <div className={`chat-message ${message.user === 'gpt' && "chatgpt"}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}>
                    {message.user === 'gpt' && /*Renderizar o componente Avatar*/ (<Avatar />)}
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div>
    )
}