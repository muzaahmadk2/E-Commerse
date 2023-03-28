import { useState, useRef, useContext } from "react";
import AuthContext from "../Store/Auth-Context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPass = passwordRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMG43QSxW48QNJrzMr1okxUA2IcXqU04w";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDMG43QSxW48QNJrzMr1okxUA2IcXqU04w";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPass,
        returnSecureToken: true,
      }),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        emailRef.current.value = '';
        passwordRef.current.value= '';
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading ? (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          ) : (
            <button className={classes.toggle}>Sending Request...</button>
          )}
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
