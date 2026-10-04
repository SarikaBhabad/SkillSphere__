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

      {/* Error */}
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
      <div className="dashboard-card admin-students-section">

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

                {/* Student Identity */}
                <div className="admin-student-identity">

                  <div className="admin-student-avatar">
                    {student.name
                      ? student.name
                          .charAt(0)
                          .toUpperCase()
                      : "S"}
                  </div>

                  <div className="admin-student-info">

                    <strong>
                      {student.name}
                    </strong>

                    <span>
                      {student.email}
                    </span>

                    <small>
                      Student
                    </small>

                  </div>

                </div>

                {/* Student Statistics */}
                <div className="admin-student-stats">

                  <div className="admin-student-stat">

                    <div className="admin-student-stat-icon">
                      🎯
                    </div>

                    <div>
                      <strong>
                        {student.skillCount || 0}
                      </strong>

                      <span>
                        Skills
                      </span>
                    </div>

                  </div>

                  <div className="admin-student-stat">

                    <div className="admin-student-stat-icon">
                      💻
                    </div>

                    <div>
                      <strong>
                        {student.projectCount || 0}
                      </strong>

                      <span>
                        Projects
                      </span>
                    </div>

                  </div>

                  <div className="admin-student-stat">

                    <div className="admin-student-stat-icon">
                      🏆
                    </div>

                    <div>
                      <strong>
                        {student.achievementCount || 0}
                      </strong>

                      <span>
                        Achievements
                      </span>
                    </div>

                  </div>

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