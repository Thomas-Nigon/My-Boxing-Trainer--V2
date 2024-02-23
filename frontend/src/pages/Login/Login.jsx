/* eslint-disable react/jsx-props-no-spreading */
import "./Login.scss";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title/Title";
import { UserContext } from "../../components/Contexts/userContext";
import axios from "../../api/axios";

function Login() {
  const { setAuth } = useContext(UserContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;
      console.info("accessToken ==>:", accessToken);
      console.info("role ==>:", role);
      setAuth({ email, password, role, accessToken });
      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
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

  return (
    <>
      <Title />
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <Link to="/home">
            <button className="login__button-return" type="submit">
              LogIn
            </button>
          </Link>
        </section>
      ) : (
        <main className="login__container">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={password}
              required
            />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">Sign Up</span>
          </p>

          <Link to="/">
            <button className="login__button-return" type="submit">
              return
            </button>
          </Link>
        </main>
      )}
    </>
  );
}

export default Login;
