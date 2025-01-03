import React, { useState } from "react";
import styles from "./Settings.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoutIcon from "../assets/logout.png";
function Settings() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [noFieldError, setNoFieldError] = useState(false);
  const [multiFieldError, setMultiFieldError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [backendError, setBackendError] = useState("");

  const navigate = useNavigate();

  const handleUpdateName = async () => {
    // e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/api/auth/updateUserName/${
            user._id
          }`,
          { name: name }
        )
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.success("Name updated successfully");
          navigate("/login");
        })
        .catch((e) => {
          console.log("Error message: " + e.message);
          if (e.response) {
            setBackendError(e.response.data);
            console.log("Server response:", e.response.data.message);
          } else {
            console.log("Error details:", e);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateEmail = async () => {
    // e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/api/auth/updateUserEmail/${
            user._id
          }`,
          { email: email }
        )
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.success("Email updated successfully");
          navigate("/login");
        })
        .catch((e) => {
          console.log("Error message: " + e.message);
          if (e.response) {
            setBackendError(e.response.data);
            console.log("Server response:", e.response.data.message);
          } else {
            console.log("Error details:", e);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatePassword = async () => {
    // e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      axios
        .put(
          `${import.meta.env.VITE_BASE_URL}/api/auth/updateUserPassword/${
            user._id
          }`,
          { oldPassword: oldPassword, newPassword: newPassword }
        )
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.success("Password updated successfully");
          navigate("/login");
        })
        .catch((e) => {
          console.log("Error message: " + e.message);
          if (e.response) {
            setBackendError(e.response.data.message);
            console.log("Server response:", e.response.data);
          } else {
            console.log("Error details:", e);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    setNoFieldError(false);
    setMultiFieldError(false);
    setPasswordError(false);
    if (name === "" && email == "" && newPassword == "" && oldPassword == "") {
      setNoFieldError(true);
    } else if (
      (name !== "" && email !== "") ||
      (name !== "" && newPassword !== "") ||
      (email !== "" && newPassword !== "")
    ) {
      setMultiFieldError(true);
    } else if (
      (oldPassword === "" && newPassword !== "") ||
      (oldPassword !== "" && newPassword === "")
    ) {
      setPasswordError(true);
    } else {
      if (name !== "") {
        handleUpdateName();
      } else if (email !== "") {
        handleUpdateEmail();
      } else if (oldPassword !== "" && newPassword !== "") {
        handleUpdatePassword();
      }
    }
  };

  const handleLogout = async () => {
    try {
      axios
        .post(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`, {
          withCredentials: true,
        })
        .then((response) => {
          
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
          console.log("logged out successfully");
         
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.updateList}>
        <h2>Settings</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className={styles.inputItem + " " + styles.name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Update Email"
          className={styles.inputItem + " " + styles.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <div className={styles.passwordContainer}>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Old Password"
              value={oldPassword}
              className={`${styles.inputItem} ${styles.password}`}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <span
              onClick={() => setShowOldPassword(!showOldPassword)}
              className={styles.eyeIcon}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className={styles.passwordContainer}>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={`${styles.inputItem} ${styles.password}`}
            />
            <span
              onClick={() => setShowNewPassword(!showNewPassword)}
              className={styles.eyeIcon}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        {noFieldError && (
          <div className={styles.errorMessage}>
            * enter any one field to update
          </div>
        )}
        {multiFieldError && (
          <div className={styles.errorMessage}>
            * you can update only one field at once
          </div>
        )}
        {passwordError && (
          <div className={styles.errorMessage}>
            * Both old and new passwords are required
          </div>
        )}
        {backendError && (
          <div className={styles.errorMessage}>* {backendError}</div>
        )}

        <button className={styles.updateBtn} onClick={handleUpdate}>
          Update
        </button>
      </div>
      <div className={styles.logout} onClick={handleLogout}>
        <img src={logoutIcon} alt="" className={styles.logoutIcon} />
        <p>Log out</p>
      </div>
    </div>
  );
}

export default Settings;
