import { useContext, useEffect, useState } from "react";
import ChatBox from "../components/ChatBox"
import SendMessage from "../components/SendMessage"
import * as signalR from "@microsoft/signalr" 
import { observer, useObserver } from "mobx-react-lite";
import { Context } from "..";

const ChatRoom = () => {
    const {store, chatStore} = useContext(Context);

    useEffect(() => {
    }, [chatStore])

    const sendMessage = async(text) => {
        chatStore.connection.send("SendToOthers", text);
        chatStore.appendMessage(text);
    }


    return useObserver(() => 
        <div>
            <ChatBox messages={chatStore.messages}/>
            <SendMessage send={sendMessage}/>
        </div>
    )
}

export default observer(ChatRoom)