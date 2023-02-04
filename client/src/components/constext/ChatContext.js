import { createContext, useState } from "react";
import io from "socket.io-client";

import App from "./../../App";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3001";
const socket = io.connect(url);
export const ChatContext = createContext();

const ChatProvider = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      navigate("/chat");
    }
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  return (
    <ChatContext.Provider
      value={{
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
        socket,
      }}
    >
      <App />
    </ChatContext.Provider>
  );
};

export default ChatProvider;
