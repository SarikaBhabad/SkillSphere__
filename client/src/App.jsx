import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Protected Student Area */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>

            <Route path="/" element={<Dashboard />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/achievements" element={<Achievements />} />

            <Route path="/profile" element={<Profile />} />

          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;