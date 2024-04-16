import { observer } from "mobx-react-lite"
import Message from "./Message"

const ChatBox = ({messages}) => {
  return (
    <div className="pb-44 pt-20 containerWrap">
        {messages.map(message => (
            <Message key={message.id} message={message}/>
        ))}
    </div>
  )
}

export default observer(ChatBox)