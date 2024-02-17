/* eslint-disable react/jsx-props-no-spreading */
import "./register.scss";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title/Title";
import axios from "../../api/axios";

function Register() {
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

  const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [user, setUSer] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // set the focus directly on the user on componant load
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // check the REGEX state of the user name and refreshes each time user is changed
    const result = USER_REGEX.test(user);

    // if the regex.test is working it set the validName State to true
    setValidName(result);
  }, [user]);

  useEffect(() => {
    // check the REGEX state of the email adress and refreshes each time a keystroke is typed is changed
    const result = EMAIL_REGEX.test(email);
    // if the regex.test is working it set the validEmail State to true
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    // check the REGEX state of the password and refreshes each time user is changed
    const result = PWD_REGEX.test(password);
    // if the regex.test is working it set the validName State to true
    setValidPwd(result);
    // if  pwd = matchPWd it set the boolean match to true and set validMatch to true with the useState
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  // Display an error message is there is one  erach time user, pwd or matchpwd are refresh
  useEffect(() => {
    setErrMsg("");
  }, [user, email, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/register`,
        JSON.stringify({ user, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
    } catch (error) {
      console.error(error);
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <Title />
      {success ? (
        <section>
          <h1>Registration success !</h1>
          <p>click here to logIn</p>
        </section>
      ) : (
        <main className="register">
          <p
            ref={errRef}
            // if there is an error message it show errmsg classname otherwise offscreen classname
            className={errMsg ? "errmsg" : "offscreen"}
            // aria-live is for accessibility
            aria-live="assertive"
          >
            {errMsg} {/* display whatever error we have in our errRef */}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </label>

            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUSer(e.target.value)}
              // accesbility for screen reader
              aria-invalid={validName ? "false" : "true"}
              // accessibility to explain to user what is needed to register, linked to <p> tag below with with uidnote ID
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <label htmlFor="email">
              Email Address
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be a valid Email address
            </p>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !password ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              type="submit"
              // eslint-disable-next-line no-unneeded-ternary
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <p>Sign In</p>
            </span>
          </p>
        </main>
      )}
    </>
  );
}

export default Register;
