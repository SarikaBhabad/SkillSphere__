import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">S</div>
          <div>
            <h2>SkillSphere</h2>
            <span>Student Portfolio</span>
          </div>
        </div>

        <nav className="sidebar-nav">
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
        </nav>

        <div className="sidebar-bottom">
          <button className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <h1>Welcome to SkillSphere</h1>
            <p>Track your skills, projects and achievements.</p>
          </div>

          <div className="user-mini">
            <div className="avatar">S</div>
            <div>
              <strong>Student</strong>
              <span>Computer Science</span>
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