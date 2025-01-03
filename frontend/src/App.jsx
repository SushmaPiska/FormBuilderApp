import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import Form from "./components/Form";
import { getForms } from './services/formService.js';

function App() {
  const [forms, setForms]=useState([])
  const [formsChange, setFormsChange]=useState(false)
  useEffect(() => {
    getForms()
      .then((res) => setForms(res))
      .catch((err) => console.log("error in getting forms", err))
      .finally(() => setFormsChange(false));
  }, [formsChange]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Login />} />
        <Route path="dashboard" element={<Dashboard forms={forms} setForms={setForms} setFormsChange={setFormsChange}/>} />
        <Route path="settings" element={<Settings />} />
        <Route path="workspace" element={<Workspace forms={forms} setForms={setForms}/>} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>

    // <LandingPage/>
  );
}

export default App;
