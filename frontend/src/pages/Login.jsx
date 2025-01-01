import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/googleIcon.png";
import doubleTriShape from "../assets/doubleTriShape.png";
import backArrow from "../assets/backArrow.png";
import axios from "axios";
// import { toast } from "react-toastify";

function Login() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSignup, setIsSignup] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.pathname;
    setIsSignup(path == "/signup");
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const [backendError, setBackendError] = useState("");

  const [error, setError] = useState({
    userName: { message: "", isVisible: false },
    email: { message: "", isVisible: false },
    password: { message: "", isVisible: false },
  });

  const frontendErrorMessages = {
    userName: {
      message: "Username is required",
      isValid: userName.length > 0,
      onError: () => {
        setError((error) => ({ ...error, userName: true }));
      },
    },
    email: {
      message: "Email is required",
      isValid: email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
    password: {
      message: "Password is required",
      isValid: password.length > 0,
      onError: () => {
        setError((error) => ({ ...error, password: true }));
      },
    },
  };
  const handleSignup = async () => {
    let isError = false;
    setBackendError("");
    setError({
      userName: { message: "", isVisible: false },

      email: { message: "", isVisible: false },
      password: { message: "", isVisible: false },
    });

    Object.keys(frontendErrorMessages).forEach((key) => {
      if (!frontendErrorMessages[key].isValid) {
        isError = true;
        setError((prevError) => ({
          ...prevError,
          [key]: {
            message: frontendErrorMessages[key].message,
            isVisible: true,
          },
        }));
      }
    });
    if (!isError) {
      try {
        await axios.post(`${baseUrl}/api/auth/signup`, {
          userName,

          email,
          password,
        });
        // toast.success("Registration successful!");
        navigate("/login");
      } catch (err) {
        // setLoading(false);
        if (err.response) {
          console.log(err.response.data.error);

          // setBackendError(err.response.data.error);
        } else {
          console.log("Error details:", err);
          // setBackendError("Network error. Please try again.");
        }
      }
    }
  };
  const handleLogin = async () => {
    let isError = false;
    setError({ email: false, password: false });
    setBackendError("");
    Object.keys(frontendErrorMessages).forEach((key) => {
      if (!frontendErrorMessages[key].isValid) {
        isError = true;
        frontendErrorMessages[key].onError();
      }
    });
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }
    if (!isError) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
          { email, password },
          { withCredentials: true }
        );
        console.log("Logged in successfully", response.data);
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data));
        // toast.success("Login successful");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error during login:", error);
        if (error.response?.data?.error) {
          setBackendError(error.response.data.error);
        } else {
          setBackendError("Network error. Please try again.");
        }
      }
    }
  };

  const handleNavigate = () => {
    if (window.location.pathname == "/signup") {
      navigate("/login");
    } else {
      navigate("/signup");
    }
  };
  const handleLanding = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <img
        src={backArrow}
        alt=""
        className={styles.header}
        onClick={handleLanding}
      />

      <div className={styles.body}>
        {isSignup && (
          <div className={styles.inputContainer}>
            <p className={styles.inputTitle}>Username</p>
            <input
              type="text"
              placeholder="Enter your username"
              value={userName}
              className={styles.inputItem}
              onChange={(e) => setUserName(e.target.value)}
            />
            {error.userName && (
              <p className={styles.errorMessage}>
                * {frontendErrorMessages.userName.message}
              </p>
            )}
          </div>
        )}
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Email</p>
          <input
            type="email"
            placeholder="Enter your  email"
            value={email}
            className={styles.inputItem}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error.email && (
            <p className={styles.errorMessage}>
              * {frontendErrorMessages.email.message}
            </p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <p className={styles.inputTitle}>Password</p>
          <input
            type="password"
            placeholder=".........."
            value={password}
            className={styles.inputItem}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error.password && (
            <p className={styles.errorMessage}>
              * {frontendErrorMessages.password.message}
            </p>
          )}
        </div>
        {isSignup && (
          <div className={styles.inputContainer}>
            <p className={styles.inputTitle}>Confirm Password</p>
            <input
              type="password"
              placeholder=".........."
              value={confirmPassword}
              className={styles.inputItem}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error.confirmPassword && (
              <p className={styles.errorMessage}>
                * {frontendErrorMessages.confirmPassword.message}
              </p>
            )}
          </div>
        )}
        {backendError && (
          <div className={styles.errorMessage}>* {backendError}</div>
        )}

        <button
          className={styles.signinBtn}
          onClick={isSignup ? handleSignup : handleLogin}
        >
          {isSignup ? "Sign Up" : "Log In"}
        </button>
        <p className={styles.orText}>OR</p>
        <button className={styles.signinBtn}>
          <img src={googleIcon} alt="" className={styles.googleIcon} />
          Sign In with Google
        </button>

        <p className={styles.bottomText}>
          {isSignup
            ? "Already have an account ? "
            : "Don't you have an account ? "}
          <span className={styles.signup} onClick={handleNavigate}>
            {isSignup ? "Login" : "Register now"}
          </span>
        </p>
      </div>
      <div className={styles.shape1}>
        <img src={doubleTriShape} alt="" />
      </div>
      <div className={styles.shape2}></div>
      <div className={styles.shape3}></div>
    </div>
  );
}

export default Login;
