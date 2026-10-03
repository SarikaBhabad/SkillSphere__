function Dashboard() {
  return (
    <div className="dashboard">

      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Here's an overview of your learning journey.</p>
        </div>

        <button className="primary-btn">
          + Add Skill
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div>
            <span>Total Skills</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>
          <div>
            <span>Projects</span>
            <strong>4</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div>
            <span>Achievements</span>
            <strong>6</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>
          <div>
            <span>Overall Progress</span>
            <strong>72%</strong>
          </div>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="dashboard-grid">

        {/* Skills */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Skill Progress</h3>
              <p>Your current skill levels</p>
            </div>
          </div>

          <div className="skill-progress">

            <div className="progress-item">
              <div className="progress-info">
                <span>Java</span>
                <strong>80%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-info">
                <span>JavaScript</span>
                <strong>70%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-info">
                <span>React</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-info">
                <span>SQL</span>
                <strong>75%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

          </div>
        </div>

        {/* Recent Projects */}
        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <h3>Recent Projects</h3>
              <p>Your latest work</p>
            </div>
          </div>

          <div className="project-list">

            <div className="project-item">
              <div className="project-icon">🌐</div>
              <div>
                <strong>SkillSphere</strong>
                <span>React • Node.js • MongoDB</span>
              </div>
            </div>

            <div className="project-item">
              <div className="project-icon">☕</div>
              <div>
                <strong>Java Management System</strong>
                <span>Java • MySQL</span>
              </div>
            </div>

            <div className="project-item">
              <div className="project-icon">📱</div>
              <div>
                <strong>Student Portal</strong>
                <span>HTML • CSS • JavaScript</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;