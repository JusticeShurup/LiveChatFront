const Message = ({ message }) => {
    return (
        <div>

            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" />
                    </div>
                </div>
                <div className="chat-header">
                    {message.username}
                </div>
                <div className="chat-bubble">{message.text}</div>

            </div>
        </div>
    )
}

export default Message