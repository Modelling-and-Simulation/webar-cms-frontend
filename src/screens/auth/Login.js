import { useRef, useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useApi from "../../hooks/useApi";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();
  const { loginApi } = useApi();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginApi({ username, password });

      const accessToken = response?.data?.accessToken;
      const roleName = response?.data?.roleName;
      setAuth({ username, password, roleName, accessToken });
      setUsername("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      const errMsg = err?.response?.data?.message;
      if (errMsg) {
        setErrMsg(errMsg);
      } else if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <section>
      <p ref={errRef} aria-live="assertive">
        {errMsg}
      </p>
      {/* <h1>Sign In</h1> */}
      <div className="login-container">
        <div className="login-left">
          <div>
              <img className='img-container-login' src="./img/login.png" alt="" />
          </div>
        </div>
        <div className="login-right">
          <h3>Welcome to Web AR!</h3>
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label htmlFor="username">Enter your username:</label>
              <br />
              <input
                className="login-input"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password">Enter your password:</label><br />
              <input
                className="login-input"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            
            <div className="login-btn-container">
                <button type="submit" className='btn'>Log in</button>
            </div> <br />
            <div className="login-trust">
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor="persist">Trust This Device</label>
            </div>
          </form>

          <div className="bottom-msg">
            Not registered yet? <Link to="/register">Join Us</Link> today!
          </div>
        </div>
      </div>
      
      

      
    </section>
  );
};

export default Login;
