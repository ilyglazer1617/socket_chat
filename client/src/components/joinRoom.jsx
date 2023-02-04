import "../App.css";
import io from "socket.io-client";
import { useContext, useState } from "react";
import Chat from "./Chat";
import { ChatContext } from "./constext/ChatContext";

const socket = io.connect("http://localhost:3001");
const JoinRoom = () => {
  const {
    username,
    setUsername,
    room,
    setRoom,
    showChat,
    setShowChat,
    joinRoom,
    sendMessage,
    messageList,
    setMessageList,
    currentMessage,
    setCurrentMessage,
  } = useContext(ChatContext);
  return (
    <div className="App">
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="Your name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    </div>
  );
};

export default JoinRoom;
