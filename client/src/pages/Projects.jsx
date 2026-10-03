import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    status: "Planned",
  });

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch projects"
        );
      }

      setProjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
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
      description: "",
      technologies: "",
      githubLink: "",
      status: "Planned",
    });

    setEditingProjectId(null);
    setShowForm(false);
    setError("");
  };

  const handleAddProject = async () => {
    try {
      setError("");

      if (!formData.title.trim()) {
        setError("Project title is required");
        return;
      }

      const token = localStorage.getItem("token");

      const technologiesArray = formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "");

      const response = await fetch(
        "http://localhost:5000/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            technologies: technologiesArray,
            githubLink: formData.githubLink,
            status: formData.status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to add project"
        );
      }

      setProjects((currentProjects) => [
        data.project,
        ...currentProjects,
      ]);

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEditClick = (project) => {
    setEditingProjectId(project._id);

    setFormData({
      title: project.title,
      description: project.description || "",
      technologies: project.technologies
        ? project.technologies.join(", ")
        : "",
      githubLink: project.githubLink || "",
      status: project.status,
    });

    setShowForm(true);
    setError("");
  };

  const handleUpdateProject = async () => {
    try {
      setError("");

      if (!formData.title.trim()) {
        setError("Project title is required");
        return;
      }

      const token = localStorage.getItem("token");

      const technologiesArray = formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "");

      const response = await fetch(
        `http://localhost:5000/api/projects/${editingProjectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            technologies: technologiesArray,
            githubLink: formData.githubLink,
            status: formData.status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update project"
        );
      }

      setProjects((currentProjects) =>
        currentProjects.map((project) =>
          project._id === editingProjectId
            ? data.project
            : project
        )
      );

      resetForm();
    } catch (error) {
      setError(error.message);
    }
  };
  const handleDeleteProject = async (projectId) => {
  try {
    setError("");

    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/api/projects/${projectId}`,
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
        data.message || "Failed to delete project"
      );
    }

    setProjects((currentProjects) =>
      currentProjects.filter(
        (project) => project._id !== projectId
      )
    );
  } catch (error) {
    setError(error.message);
  }
};

  const handleSubmit = () => {
    if (editingProjectId) {
      handleUpdateProject();
    } else {
      handleAddProject();
    }
  };

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div className="projects">
      <div className="page-heading">
        <div>
          <h2>My Projects</h2>
          <p>Showcase your projects and practical work.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          + Add Project
        </button>
      </div>

      {error && <p className="auth-error">{error}</p>}

      {showForm && (
        <div className="dashboard-card skill-form-card">
          <div className="card-header">
            <div>
              <h3>
                {editingProjectId
                  ? "Edit Project"
                  : "Add New Project"}
              </h3>

              <p>
                {editingProjectId
                  ? "Update your project information."
                  : "Enter your project details."}
              </p>
            </div>
          </div>

          <div className="skill-form">
            <div className="form-group">
              <label>Project Title</label>

              <input
                type="text"
                name="title"
                placeholder="Example: SkillSphere"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Planned">Planned</option>
                <option value="In Progress">
                  In Progress
                </option>
                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Technologies</label>

              <input
                type="text"
                name="technologies"
                placeholder="React, Node.js, MongoDB"
                value={formData.technologies}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>GitHub Link</label>

              <input
                type="url"
                name="githubLink"
                placeholder="https://github.com/..."
                value={formData.githubLink}
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
                placeholder="Describe your project..."
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
                {editingProjectId
                  ? "Update Project"
                  : "Add Project"}
              </button>
            </div>
          </div>
        </div>
      )}

      {projects.length === 0 ? (
        <div className="dashboard-card">
          <p>No projects added yet.</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <div className="project-card-top">
                <div className="project-icon">💻</div>

                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description ||
                  "No description provided."}
              </p>

              <div className="project-tech">
                {project.technologies?.map(
                  (technology, index) => (
                    <span key={index}>{technology}</span>
                  )
                )}
              </div>

              <div className="project-actions">
  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="secondary-btn"
    >
      GitHub
    </a>
  )}

  <button
    type="button"
    className="secondary-btn"
    onClick={() => handleEditClick(project)}
  >
    Edit
  </button>

  <button
    type="button"
    className="delete-btn"
    onClick={() => handleDeleteProject(project._id)}
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

export default Projects;