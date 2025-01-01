import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Workspace from "./pages/Workspace";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="workspace" element={<Workspace />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </BrowserRouter>

    // <LandingPage/>
  );
}

export default App;
