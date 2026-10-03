import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Profile from "./pages/Profile";
import Roadmap from "./pages/Roadmap";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function AdminRoute() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <AdminDashboard />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Area */}
        <Route element={<ProtectedRoute />}>

          {/* Student/Admin Main Layout */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Dashboard />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/projects" element={<Projects />} />

            <Route
              path="/achievements"
              element={<Achievements />}
            />

            <Route
              path="/roadmap"
              element={<Roadmap />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            {/* Admin */}
            <Route
              path="/admin"
              element={<AdminRoute />}
            />

          </Route>
        </Route>

        {/* Unknown Route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;