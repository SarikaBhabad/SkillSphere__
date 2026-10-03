import { NavLink, Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const isAdmin = user.role === "admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="app-shell">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">S</div>

          <div>
            <h2>SkillSphere</h2>
            <span>
              {isAdmin
                ? "Admin Panel"
                : "Student Portfolio"}
            </span>
          </div>
        </div>

        <nav className="sidebar-nav">

          {/* Admin Navigation */}
          {isAdmin ? (
            <NavLink to="/admin">
              🛡️ Admin Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to="/" end>
                🏠 Dashboard
              </NavLink>

              <NavLink to="/skills">
                🎯 Skills
              </NavLink>

              <NavLink to="/projects">
                💻 Projects
              </NavLink>

              <NavLink to="/achievements">
                🏆 Achievements
              </NavLink>

              <NavLink to="/roadmap">
                🗺️ Roadmap
              </NavLink>

              <NavLink to="/profile">
                👤 Profile
              </NavLink>
            </>
          )}

        </nav>

        <div className="sidebar-bottom">

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        <header className="topbar">

          <div>
            <h1>
              {isAdmin
                ? "Welcome, Admin"
                : "Welcome to SkillSphere"}
            </h1>

            <p>
              {isAdmin
                ? "Manage students and monitor the platform."
                : "Track your skills, projects and achievements."}
            </p>
          </div>

          <div className="user-mini">

            <div className="avatar">
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : "S"}
            </div>

            <div>
              <strong>
                {user.name || "Student"}
              </strong>

              <span>
                {isAdmin
                  ? "Administrator"
                  : "Computer Science"}
              </span>
            </div>

          </div>

        </header>

        <section className="page-content">
          <Outlet />
        </section>

      </main>

    </div>
  );
}

export default MainLayout;