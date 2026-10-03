import { useEffect, useState } from "react";

function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingAchievementId, setEditingAchievementId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    type: "Certificate",
    description: "",
    date: "",
  });

  const fetchAchievements = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/achievements",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch achievements"
        );
      }

      setAchievements(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      title: "",
      type: "Certificate",
      description: "",
      date: "",
    });

    setEditingAchievementId(null);
    setShowForm(false);
    setError("");
  };

  const handleAddAchievement = async () => {
    try {
      setError("");

      if (!formData.title.trim()) {
        setError("Achievement title is required");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/achievements",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            type: formData.type,
            description: formData.description,
            date: formData.date || undefined,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add achievement"
        );
      }

      setAchievements((currentAchievements) => [
        data.achievement,
        ...currentAchievements,
      ]);

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (achievement) => {
    setEditingAchievementId(achievement._id);

    setFormData({
      title: achievement.title,
      type: achievement.type,
      description: achievement.description || "",
      date: achievement.date
        ? new Date(achievement.date)
            .toISOString()
            .split("T")[0]
        : "",
    });

    setShowForm(true);
    setError("");
  };

  const handleUpdateAchievement = async () => {
    try {
      setError("");

      if (!formData.title.trim()) {
        setError("Achievement title is required");
        return;
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/achievements/${editingAchievementId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            type: formData.type,
            description: formData.description,
            date: formData.date || undefined,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update achievement"
        );
      }

      setAchievements((currentAchievements) =>
        currentAchievements.map((achievement) =>
          achievement._id === editingAchievementId
            ? data.achievement
            : achievement
        )
      );

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };
  const handleDeleteAchievement = async (achievementId) => {
  try {
    setError("");

    const confirmed = window.confirm(
      "Are you sure you want to delete this achievement?"
    );

    if (!confirmed) {
      return;
    }

    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/achievements/${achievementId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Failed to delete achievement"
      );
    }

    setAchievements((currentAchievements) =>
      currentAchievements.filter(
        (achievement) => achievement._id !== achievementId
      )
    );
  } catch (error) {
    setError(error.message);
  }
};

  const handleSubmit = () => {
    if (editingAchievementId) {
      handleUpdateAchievement();
    } else {
      handleAddAchievement();
    }
  };

  if (loading) {
    return <p>Loading achievements...</p>;
  }

  return (
    <div className="achievements">
      <div className="page-heading">
        <div>
          <h2>My Achievements</h2>
          <p>
            Showcase your certificates, workshops and accomplishments.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          + Add Achievement
        </button>
      </div>

      {error && <p className="auth-error">{error}</p>}

      {showForm && (
        <div className="dashboard-card skill-form-card">
          <div className="card-header">
            <div>
              <h3>
                {editingAchievementId
                  ? "Edit Achievement"
                  : "Add New Achievement"}
              </h3>

              <p>
                {editingAchievementId
                  ? "Update your achievement information."
                  : "Enter your achievement details."}
              </p>
            </div>
          </div>

          <div className="skill-form">
            <div className="form-group">
              <label>Title</label>

              <input
                type="text"
                name="title"
                placeholder="Example: Java Programming Certificate"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Certificate">Certificate</option>
                <option value="Workshop">Workshop</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div
              className="form-group"
              style={{ gridColumn: "1 / -1" }}
            >
              <label>Description</label>

              <textarea
                name="description"
                placeholder="Describe your achievement..."
                value={formData.description}
                onChange={handleChange}
                rows="4"
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
                {editingAchievementId
                  ? "Update Achievement"
                  : "Add Achievement"}
              </button>
            </div>
          </div>
        </div>
      )}

      {achievements.length === 0 ? (
        <div className="dashboard-card">
          <p>No achievements added yet.</p>
        </div>
      ) : (
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              className="achievement-card"
              key={achievement._id}
            >
              <div className="achievement-icon">🏆</div>

              <div className="achievement-content">
                <div className="achievement-top">
                  <span className="achievement-type">
                    {achievement.type}
                  </span>

                  <span className="achievement-date">
                    {achievement.date
                      ? new Date(
                          achievement.date
                        ).toLocaleDateString()
                      : "No date"}
                  </span>
                </div>

                <h3>{achievement.title}</h3>

                <p>
                  {achievement.description ||
                    "No description provided."}
                </p>

               <div className="project-actions">
  <button
    type="button"
    className="secondary-btn"
    onClick={() =>
      handleEditClick(achievement)
    }
  >
    Edit
  </button>

  <button
    type="button"
    className="delete-btn"
    onClick={() =>
      handleDeleteAchievement(achievement._id)
    }
  >
    Delete
  </button>
</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Achievements;