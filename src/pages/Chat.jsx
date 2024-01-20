import { useState } from "react";
import { toast } from "react-toastify";
import "../assets/styles/chat.css";
import Allmessages from "../Components/Allmessages";

const Chat = () => {
    const [input, setInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    // If there is no messages array in localStorage
    if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", "[]")
    }

    let totalMessages = JSON.parse(localStorage.getItem("messages"));
    let messages = totalMessages;

    // Send Message Button
    const sendMessage = async (e) => {
        e.preventDefault();
        if (input == "") {
            return toast.warning("Please Type Your Message", {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        setButtonClicked(true);

        // Getting user token from localstorage
        const savedToken = localStorage.getItem("token");
        if (!savedToken) {
            toast.error("Unauthorized! Please login.", {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
            return setButtonClicked(false);
        }

        const url = "https://convogenius.onrender.com/api";
        const data = {
            text: input
        }
        const requestObject = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": savedToken },
            body: JSON.stringify(data)
        }

        try {
            // Sending fetch request
            const response = await fetch(url, requestObject);
            const responseData = await response.json();

            // Pushing new response to messages Array
            messages.push({
                id: responseData.id,
                yourMessage: input,
                geniusMessage: responseData.response
            });
            
            let stringifyMessages = JSON.stringify(messages);
            // Setting messages to localstorage
            localStorage.setItem("messages", stringifyMessages);

            // Clearing input field
            setButtonClicked(false);
            setInput("");

        } catch (error) {
            toast.error(`${error.message}`, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }

    return (
        <div className="chat">
            {messages && messages.length === 0 ? (
                <div className="chat">
                    <h1>ConvoGenius</h1>
                    <h2>How can i help you today?</h2>
                </div>)

                // Chat Container
                : <Allmessages messages={messages} />
            }

            {/* Input */}
            <form className="input-container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} id="input-text" placeholder="Message ConvoGenius..." />
                <button type="submit" onClick={sendMessage} className={`${buttonClicked ? "disabled" : ""} send-message`}>Send</button>
            </form>
        </div>
    );
}

export default Chat;