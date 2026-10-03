function Profile() {
  return (
    <div className="profile">
      <div className="page-heading">
        <div>
          <h2>My Profile</h2>
          <p>Manage your personal and professional information.</p>
        </div>

        <button className="primary-btn">Edit Profile</button>
      </div>

      <div className="profile-grid">
        <div className="profile-card profile-main">
          <div className="profile-avatar">S</div>

          <h3>Student</h3>
          <p className="profile-role">Computer Science Student</p>

          <div className="profile-info">
            <div>
              <span>College</span>
              <strong>SPPU</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>India</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>student@example.com</strong>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <h3>About Me</h3>

          <p className="profile-about">
            I am a Computer Science student interested in software
            development, Java, web technologies and building practical
            projects.
          </p>

          <div className="profile-links">
            <div>
              <span>GitHub</span>
              <strong>github.com/student</strong>
            </div>

            <div>
              <span>LinkedIn</span>
              <strong>linkedin.com/in/student</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;