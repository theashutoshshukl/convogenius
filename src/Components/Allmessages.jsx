import "../assets/styles/allmessages.css";

const Allmessages = (messages) => {
    // Delete all chats
    const deleteAllChats = () => {
        localStorage.removeItem("messages");
        window.location.reload();
    }

    return (
        <div className="chat-container">
            <div className="chat-top-heading">
                <h2>Your Messages</h2>
                <i onClick={deleteAllChats} className="fa-solid fa-trash fa-xl"></i>
            </div>

            <div className="chats">
                {messages.messages.map(e => {
                    return (
                        <div className="all-messages" key={e.id}>
                            <p id="user-message"><span>You: </span>{e.yourMessage}</p>
                            <p id="genius-message"><span>ConvoGenius: </span>{e.geniusMessage}</p>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Allmessages;