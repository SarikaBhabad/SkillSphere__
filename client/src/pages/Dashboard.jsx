
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [achievements, setAchievements] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboardData = async () => {
    try {
      setError("");

      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [skillsResponse, projectsResponse, achievementsResponse] =
        await Promise.all([
          fetch("http://localhost:5000/api/skills", {
            headers,
          }),

          fetch("http://localhost:5000/api/projects", {
            headers,
          }),

          fetch("http://localhost:5000/api/achievements", {
            headers,
          }),
        ]);

      const skillsData = await skillsResponse.json();
      const projectsData = await projectsResponse.json();
      const achievementsData = await achievementsResponse.json();

      if (!skillsResponse.ok) {
        throw new Error(
          skillsData.message || "Failed to fetch skills"
        );
      }

      if (!projectsResponse.ok) {
        throw new Error(
          projectsData.message || "Failed to fetch projects"
        );
      }

      if (!achievementsResponse.ok) {
        throw new Error(
          achievementsData.message ||
            "Failed to fetch achievements"
        );
      }

      setSkills(skillsData);
      setProjects(projectsData);
      setAchievements(achievementsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const overallProgress =
    skills.length > 0
      ? Math.round(
          skills.reduce(
            (total, skill) => total + (skill.progress || 0),
            0
          ) / skills.length
        )
      : 0;

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  return (
    <div className="dashboard">
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Here's an overview of your learning journey.</p>
        </div>

        <button
  className="primary-btn"
  onClick={() => navigate("/skills")}
>
  + Add Skill
</button>
      </div>

      {error && <p className="auth-error">{error}</p>}

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🎯</div>

          <div>
            <span>Total Skills</span>
            <strong>{skills.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>

          <div>
            <span>Projects</span>
            <strong>{projects.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>

          <div>
            <span>Achievements</span>
            <strong>{achievements.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📈</div>

          <div>
            <span>Overall Progress</span>
            <strong>{overallProgress}%</strong>
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
            {skills.length === 0 ? (
              <p>No skills added yet.</p>
            ) : (
              skills.slice(0, 5).map((skill) => (
                <div
                  className="progress-item"
                  key={skill._id}
                >
                  <div className="progress-info">
                    <span>{skill.name}</span>

                    <strong>
                      {skill.progress}%
                    </strong>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            )}
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
            {projects.length === 0 ? (
              <p>No projects added yet.</p>
            ) : (
              projects.slice(0, 5).map((project) => (
                <div
                  className="project-item"
                  key={project._id}
                >
                  <div className="project-icon">
                    💻
                  </div>

                  <div>
                    <strong>{project.title}</strong>

                    <span>
                      {project.technologies?.length > 0
                        ? project.technologies.join(" • ")
                        : "No technologies added"}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;