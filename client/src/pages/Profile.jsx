function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const displayName = user.name || "Student";
  const displayEmail = user.email || "No email available";

  const avatarLetter = displayName
    .charAt(0)
    .toUpperCase();

  const displayRole =
    user.role === "admin"
      ? "Administrator"
      : "Computer Science Student";

  return (
    <div className="profile">
      <div className="page-heading">
        <div>
          <h2>My Profile</h2>
          <p>
            Manage your personal and professional information.
          </p>
        </div>

        <button className="primary-btn">
          Edit Profile
        </button>
      </div>

      <div className="profile-grid">

        {/* Main Profile */}
        <div className="profile-card profile-main">
          <div className="profile-avatar">
            {avatarLetter}
          </div>

          <h3>{displayName}</h3>

          <p className="profile-role">
            {displayRole}
          </p>

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
              <strong>{displayEmail}</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>
                {user.role === "admin"
                  ? "Admin"
                  : "Student"}
              </strong>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="profile-card">
          <h3>About Me</h3>

          <p className="profile-about">
            I am a Computer Science student interested in
            software development, Java, web technologies and
            building practical projects.
          </p>

          <div className="profile-links">
            <div>
              <span>GitHub</span>
              <strong>Not added yet</strong>
            </div>

            <div>
              <span>LinkedIn</span>
              <strong>Not added yet</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;