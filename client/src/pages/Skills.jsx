function Skills() {
  return (
    <div className="simple-page">
      <div className="page-heading">
        <div>
          <h2>Skills</h2>
          <p>Track and manage your technical skills.</p>
        </div>

        <button className="primary-btn">
          + Add Skill
        </button>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-card-top">
            <div className="skill-symbol">☕</div>

            <div>
              <h3>Java</h3>
              <span>Programming Language</span>
            </div>
          </div>

          <div className="skill-level">
            <span>Advanced</span>
            <strong>80%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-top">
            <div className="skill-symbol">JS</div>

            <div>
              <h3>JavaScript</h3>
              <span>Programming Language</span>
            </div>
          </div>

          <div className="skill-level">
            <span>Intermediate</span>
            <strong>70%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-top">
            <div className="skill-symbol">⚛</div>

            <div>
              <h3>React</h3>
              <span>Frontend</span>
            </div>
          </div>

          <div className="skill-level">
            <span>Intermediate</span>
            <strong>65%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>

        <div className="skill-card">
          <div className="skill-card-top">
            <div className="skill-symbol">SQL</div>

            <div>
              <h3>SQL</h3>
              <span>Database</span>
            </div>
          </div>

          <div className="skill-level">
            <span>Advanced</span>
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
  );
}

export default Skills;