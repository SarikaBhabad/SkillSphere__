import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSkills = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/skills", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch skills");
      }

      setSkills(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  if (loading) {
    return <p>Loading skills...</p>;
  }

  return (
    <div className="skills">
      <div className="page-heading">
        <div>
          <h2>My Skills</h2>
          <p>Track and manage your technical skills.</p>
        </div>

        <button className="primary-btn">+ Add Skill</button>
      </div>

      {error && <p>{error}</p>}

      {skills.length === 0 ? (
        <div className="dashboard-card">
          <p>No skills added yet.</p>
        </div>
      ) : (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill._id}>
              <div className="skill-card-top">
                <div className="skill-symbol">
                  {skill.name.charAt(0).toUpperCase()}
                </div>

                <span className="skill-level">
                  {skill.level}
                </span>
              </div>

              <h3>{skill.name}</h3>

              <p>{skill.category}</p>

              <div className="progress-info">
                <span>Progress</span>
                <strong>{skill.progress}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;