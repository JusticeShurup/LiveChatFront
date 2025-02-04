import { sendMessage } from "@microsoft/signalr/dist/esm/Utils";
import { useState } from "react"

function SendMessage(props) {
    const [value, setValue] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        props.send(value);
        setValue("");
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
                <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounder-r-none" type="text"></input>
                <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
            </form>
        </div>
    )
}

export default SendMessage