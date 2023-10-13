import { useState, useEffect } from "react";
import "./App.css";
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";

function App() {
  const db = getDatabase();
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");

  const handleOnChange = (e) => {
    setMsg(e.target.value);
  };

  const chatsListRef = ref(db, "chats");

  useEffect(() => {
    // Listen for child added events to update the chat
    const unsubscribe = onChildAdded(chatsListRef, (data) => {
      setChats((prevChats) => [...prevChats, data.val()]);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSend = () => {
    const newChatsRef = push(chatsListRef);
    set(newChatsRef, {
      name,
      message: msg,
    });

    setMsg("");
  };

  return (
    <>
      {name ? null : (
        <div>
          <input
            type="text"
            placeholder="Enter Name to Start Chat"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}

      {name ? (
        <div>
          <h1>Wiki Chat</h1>
          <hr />
          <div className="chat-container">
            {chats.map((curElem, index) => {
              return (
                <div
                  className={`container ${
                    curElem.name === name ? "me" : "null"
                  }`}
                  key={index} // Add a unique key for each chat message
                >
                  <p className="chatbox">
                    <strong>{curElem.name}</strong>
                    <span> {curElem.message}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="btm">
            <input
              className="input"
              type="text"
              placeholder="Enter Message"
              value={msg}
              onChange={handleOnChange}
            />
            <button onClick={handleSend}>Send➡️</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
