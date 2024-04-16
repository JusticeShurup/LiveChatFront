import * as signalR from "@microsoft/signalr";
import { makeAutoObservable, observable } from "mobx";

export default class ChatStore {
    connection = {}
    messages = [
        {
            id: 1,
            text: "Всем привет!",
            username: "Вася Пупкин"
        }
    ];

    constructor(){
        makeAutoObservable(this);
        this.connection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5098/chat")
        .withAutomaticReconnect()
        .build();



        this.connection.on('MessageReceived', (message) => {
            //setMessages([...messages, {id: messages[messages.length - 1].id + 1, text: message, username: `${store.user.firstName } ${store.user.lastName}` }]);
            this.appendMessage(message);
        })
        
        this.connection.onclose(error => {
            console.log('Connection closed. ', error)
        });

        this.connection.start();
    }

    appendMessage(message) {
        this.messages.push({id: this.messages[this.messages.length - 1].id + 1, text: message, username: "Имя Фамилия" });
    }
}