import "./style/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [data, setdata] = useState({});
  const [dataForRegister, setDataForRegister] = useState({});

  const handelSubmitRegister = (e) => {
    e.preventDefault();
    // navigate("/");
    window.location.reload();
  };
  const handelSubmitLogIn = (e) => {
    e.preventDefault();

    navigate("/joinRoom");
  };
  return (
    <div class="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div class="signup">
        <form onSubmit={(e) => handelSubmitLogIn(e)}>
          <label className="labelLog" for="chk" aria-hidden="true">
            Login
          </label>
          <input
            className="inputLog"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="inputLog"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button className="buttonLog">Login</button>
        </form>
      </div>

      <div class="login">
        <form onSubmit={(e) => handelSubmitRegister(e)}>
          <label className="labelLog" for="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            className="inputLog"
            type="text"
            name="txt"
            placeholder="User name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="inputLog"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLog"
            type="password"
            name="pswd"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="buttonLog">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
