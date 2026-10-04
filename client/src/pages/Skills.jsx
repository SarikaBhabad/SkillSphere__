import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "Technical",
    level: "Beginner",
    progress: 0,
  });

  const fetchSkills = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/skills`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "Technical",
      level: "Beginner",
      progress: 0,
    });

    setEditingSkillId(null);
    setShowForm(false);
    setError("");
  };

  const handleAddSkill = async () => {
    try {
      setError("");

      if (!formData.name.trim()) {
        setError("Skill name is required");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/skills`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            category: formData.category,
            level: formData.level,
            progress: Number(formData.progress),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to add skill");
      }

      setSkills((currentSkills) => [
        data.skill,
        ...currentSkills,
      ]);

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (skill) => {
    setEditingSkillId(skill._id);

    setFormData({
      name: skill.name,
      category: skill.category,
      level: skill.level,
      progress: skill.progress,
    });

    setShowForm(true);
    setError("");
  };

  const handleUpdateSkill = async () => {
    try {
      setError("");

      if (!formData.name.trim()) {
        setError("Skill name is required");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/skills/${editingSkillId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: formData.name,
            category: formData.category,
            level: formData.level,
            progress: Number(formData.progress),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update skill");
      }

      setSkills((currentSkills) =>
        currentSkills.map((skill) =>
          skill._id === editingSkillId ? data.skill : skill
        )
      );

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteSkill = async (skillId) => {
    try {
      setError("");

      const confirmed = window.confirm(
        "Are you sure you want to delete this skill?"
      );

      if (!confirmed) {
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/skills/${skillId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete skill");
      }

      setSkills((currentSkills) =>
        currentSkills.filter((skill) => skill._id !== skillId)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = () => {
    if (editingSkillId) {
      handleUpdateSkill();
    } else {
      handleAddSkill();
    }
  };

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

        <button
          className="primary-btn"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          + Add Skill
        </button>
      </div>

      {error && <p className="auth-error">{error}</p>}

      {showForm && (
        <div className="dashboard-card skill-form-card">
          <div className="card-header">
            <div>
              <h3>
                {editingSkillId ? "Edit Skill" : "Add New Skill"}
              </h3>

              <p>
                {editingSkillId
                  ? "Update your skill information."
                  : "Enter the details of your skill."}
              </p>
            </div>
          </div>

          <div className="skill-form">
            <div className="form-group">
              <label>Skill Name</label>

              <input
                type="text"
                name="name"
                placeholder="Example: Java"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <input
                type="text"
                name="category"
                placeholder="Example: Programming"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Level</label>

              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>

            <div className="form-group">
              <label>Progress: {formData.progress}%</label>

              <input
                type="range"
                name="progress"
                min="0"
                max="100"
                value={formData.progress}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-btn"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="button"
                className="primary-btn"
                onClick={handleSubmit}
              >
                {editingSkillId ? "Update Skill" : "Add Skill"}
              </button>
            </div>
          </div>
        </div>
      )}

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
                  style={{
                    width: `${skill.progress}%`,
                  }}
                ></div>
              </div>

              <div className="skill-actions">
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => handleEditClick(skill)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDeleteSkill(skill._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;