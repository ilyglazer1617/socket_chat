import Chat from "./components/Chat";
import { Routes, Route } from "react-router-dom";
import JoinRoom from "./components/joinRoom";
import LogIn from "./components/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/joinRoom" element={<JoinRoom />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
