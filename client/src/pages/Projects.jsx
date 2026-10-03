function Projects() {
  const projects = [
    {
      title: "SkillSphere",
      description:
        "A student skill and achievement portfolio for tracking learning progress.",
      technologies: "React • Node.js • MongoDB",
      status: "In Progress",
    },
    {
      title: "Java Management System",
      description:
        "A Java-based application for managing records and basic database operations.",
      technologies: "Java • MySQL",
      status: "Completed",
    },
    {
      title: "Student Portal",
      description:
        "A responsive student portal created to manage academic information.",
      technologies: "HTML • CSS • JavaScript",
      status: "Completed",
    },
  ];

  return (
    <div className="projects">
      <div className="page-heading">
        <div>
          <h2>Projects</h2>
          <p>Showcase your projects and development experience.</p>
        </div>

        <button className="primary-btn">+ Add Project</button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-top">
              <div className="project-icon">💻</div>

              <span className="project-status">{project.status}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies}
            </div>

            <div className="project-actions">
              <button className="secondary-btn">View</button>
              <button className="secondary-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;