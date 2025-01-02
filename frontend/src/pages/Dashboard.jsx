import React, { useState } from "react";
import styles from "./Dashboard.module.css";

import Navbar from "../components/Navbar";
import createFolderIcon from "../assets/createFolderIcon.png";
import deleteIcon from "../assets/deleteIcon.png";
import SharePopup from "../components/SharePopup";
import CreatePopup from "../components/CreatePopup";
import DeletePopup from "../components/DeletePopup";
import { useNavigate } from "react-router-dom";

function Dashboard({ forms, setForms }) {
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
  const handleDeleteForm = () => {
    setIsDeleteClicked(true);
    setDeleteWhat("file");
  };
  const handleFormWorkspace = (form) => {
    navigate("/workspace", { state: { form} });
  };

  return (
    <div className={styles.container}>
      <Navbar setIsSharePopup={setIsSharePopup} />
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
          {forms.map((form, index)=>(
            <div className={styles.form} onClick={()=>handleFormWorkspace(form)}>
              <img
                src={deleteIcon}
                alt=""
                className={styles.formDeleteIcon}
                onClick={handleDeleteForm}
              />
              <p>{form.name}</p>
            </div>
          ))
            
          }
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
            />
          </div>
        )}
        {isDeleteClicked && (
          <div className={styles.deletePopup}>
            <DeletePopup
              deleteWhat={deleteWhat}
              setIsDeleteClicked={setIsDeleteClicked}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
