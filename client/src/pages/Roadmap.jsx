function Roadmap() {
  const roadmapSteps = [
    {
      number: 1,
      title: "Programming Fundamentals",
      description:
        "Build a strong foundation in programming, OOP, data structures and problem solving.",
      status: "In Progress",
      progress: 70,
    },
    {
      number: 2,
      title: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript and React to build modern web applications.",
      status: "In Progress",
      progress: 60,
    },
    {
      number: 3,
      title: "Backend Development",
      description:
        "Learn Java, Spring Boot, REST APIs, databases and authentication.",
      status: "In Progress",
      progress: 40,
    },
    {
      number: 4,
      title: "Projects & GitHub",
      description:
        "Build practical projects and maintain them using Git and GitHub.",
      status: "In Progress",
      progress: 50,
    },
    {
      number: 5,
      title: "DSA & Interview Preparation",
      description:
        "Practice data structures, algorithms, aptitude and technical interview questions.",
      status: "Upcoming",
      progress: 20,
    },
    {
      number: 6,
      title: "Job Readiness",
      description:
        "Prepare your resume, portfolio, communication skills and apply for internships and jobs.",
      status: "Upcoming",
      progress: 10,
    },
  ];

  return (
    <div className="roadmap">

      <div className="page-heading">
        <div>
          <h2>My Roadmap</h2>
          <p>
            Follow your learning journey from fundamentals to
            career readiness.
          </p>
        </div>
      </div>

      {/* Career Goal */}
      <div className="dashboard-card roadmap-goal">
        <div className="roadmap-goal-icon">🎯</div>

        <div>
          <span className="roadmap-label">
            Career Goal
          </span>

          <h3>Java Full Stack Developer</h3>

          <p>
            Build strong programming fundamentals, develop
            real-world projects and become ready for software
            development opportunities.
          </p>
        </div>
      </div>

      {/* Roadmap */}
      <div className="roadmap-list">
        {roadmapSteps.map((step) => (
          <div
            className="dashboard-card roadmap-card"
            key={step.number}
          >
            <div className="roadmap-number">
              {step.number}
            </div>

            <div className="roadmap-content">
              <div className="roadmap-card-header">
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

                <span
                  className={
                    step.status === "In Progress"
                      ? "roadmap-status active"
                      : "roadmap-status"
                  }
                >
                  {step.status}
                </span>
              </div>

              <div className="progress-info">
                <span>Progress</span>
                <strong>{step.progress}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${step.progress}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Roadmap;