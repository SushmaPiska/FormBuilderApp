import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

import Navbar from "../components/Navbar";
import createFolderIcon from "../assets/createFolderIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import SharePopup from "../components/SharePopup";
import CreatePopup from "../components/CreatePopup";
import DeletePopup from "../components/DeletePopup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard({ forms, setForms, setFormsChange,toggleTheme }) {
  const [isSharePopup, setIsSharePopup] = useState(false);
  const [createWhat, setCreateWhat] = useState("");
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [deleteWhat, setDeleteWhat] = useState("");

  const navigate = useNavigate();
  const handleCreateFolder = () => {
    setIsCreateClicked(true);
    setCreateWhat("folder");
  };
  const handleCreateForm = () => {
    setIsCreateClicked(true);
    setCreateWhat("form");
  };
  const handleDeleteFolder = () => {
    setIsDeleteClicked(true);
    setDeleteWhat("folder");
  };
  const handleDeleteForm = async (form) => {
    setIsDeleteClicked(true);
    setDeleteWhat("file");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  
  const handleDeleteConfirm = async (form) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/api/form/deleteForm/${form._id}`
      );

      setFormsChange(true);
      console.log("form deleted successfully", response.data);
      alert("form deleted successfully");
    } catch (error) {
      console.error(
        "Error deleting form:",
        error.response?.data || error.message
      );
    }
  };

  const handleFormWorkspace = (form) => {
    navigate("/workspace", { state: { form } });
  };

  return (
    <div className={styles.container}>
      <Navbar setIsSharePopup={setIsSharePopup} toggleTheme={toggleTheme}/>
      <div className={styles.body}>
        <div className={styles.folders}>
          <div className={styles.createFolder} onClick={handleCreateFolder}>
            <img
              src={createFolderIcon}
              alt=""
              className={styles.createFolderIcon}
            />
            <p>Create a folder</p>
          </div>
          <div className={styles.folder}>
            <p>Computer Networks</p>
            <img src={deleteIcon} alt="" onClick={handleDeleteFolder} />
          </div>
        </div>
        <div className={styles.forms}>
          <div className={styles.createForm} onClick={handleCreateForm}>
            <p className={styles.addIcon}>+</p>
            <p>Create a typebot</p>
          </div>
          {forms.map((form, index) => (
            <div key={index} className={styles.form}>
              <img
                src={deleteIcon}
                alt=""
                className={styles.formDeleteIcon}
                onClick={() => handleDeleteConfirm(form)}
              />
              <p onClick={() => handleFormWorkspace(form)}>{form.name}</p>
            </div>
          ))}
        </div>

        {isSharePopup && (
          <div className={styles.sharePopup}>
            <SharePopup setIsSharePopup={setIsSharePopup} />
          </div>
        )}
        {isCreateClicked && (
          <div className={styles.createPopup}>
            <CreatePopup
              createWhat={createWhat}
              setIsCreateClicked={setIsCreateClicked}
              setFormsChange={setFormsChange}
            />
          </div>
        )}
        {/* {isDeleteClicked && (
          <div className={styles.deletePopup}>
            <DeletePopup
              deleteWhat={deleteWhat}
              setIsDeleteClicked={setIsDeleteClicked}
              handleDeleteConfirm={handleDeleteConfirm}
            />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Dashboard;
