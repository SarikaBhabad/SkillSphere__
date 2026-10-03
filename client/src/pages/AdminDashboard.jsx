import { useEffect, useState } from "react";

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setError("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/admin/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch students"
        );
      }

      setStudents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const totalStudents = students.length;

  const totalSkills = students.reduce(
    (total, student) => total + (student.skillCount || 0),
    0
  );

  const totalProjects = students.reduce(
    (total, student) => total + (student.projectCount || 0),
    0
  );

  const totalAchievements = students.reduce(
    (total, student) =>
      total + (student.achievementCount || 0),
    0
  );

  if (loading) {
    return <p>Loading admin dashboard...</p>;
  }

  return (
    <div className="dashboard">
      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h2>Admin Dashboard</h2>
          <p>
            Manage students and view SkillSphere statistics.
          </p>
        </div>
      </div>

      {error && (
        <p className="auth-error">
          {error}
        </p>
      )}

      {/* Statistics */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👨‍🎓</div>

          <div>
            <span>Total Students</span>
            <strong>{totalStudents}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🎯</div>

          <div>
            <span>Total Skills</span>
            <strong>{totalSkills}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>

          <div>
            <span>Total Projects</span>
            <strong>{totalProjects}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏆</div>

          <div>
            <span>Achievements</span>
            <strong>{totalAchievements}</strong>
          </div>
        </div>
      </div>

      {/* Students */}
      <div className="dashboard-card">
        <div className="card-header">
          <div>
            <h3>Students</h3>
            <p>
              Registered students and their portfolio activity.
            </p>
          </div>
        </div>

        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (
          <div className="admin-students-list">
            {students.map((student) => (
              <div
                className="admin-student-item"
                key={student._id}
              >
                <div className="admin-student-avatar">
                  {student.name
                    ? student.name
                        .charAt(0)
                        .toUpperCase()
                    : "S"}
                </div>

                <div className="admin-student-info">
                  <strong>{student.name}</strong>

                  <span>{student.email}</span>
                </div>

                <div className="admin-student-stats">
                  <span>
                    🎯 {student.skillCount || 0} Skills
                  </span>

                  <span>
                    💻 {student.projectCount || 0} Projects
                  </span>

                  <span>
                    🏆{" "}
                    {student.achievementCount || 0}{" "}
                    Achievements
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;