import { useEffect, useState } from "react";

const careerGoals = [
  "Java Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Python Developer",
  "Data Analyst",
  "AI / Machine Learning Developer",
  "Generative AI Developer",
  "Mobile App Developer",
  "Cloud / DevOps Engineer",
  "Cybersecurity Engineer",
  "Not Decided Yet",
];

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

  const [careerGoal, setCareerGoal] = useState(
    "Not Decided Yet"
  );

  const [savingGoal, setSavingGoal] = useState(false);
  const [goalMessage, setGoalMessage] = useState("");
  const [goalError, setGoalError] = useState("");

  useEffect(() => {
    const fetchCareerGoal = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/goal`  ,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || "Failed to fetch career goal"
          );
        }

        setCareerGoal(
          data.careerGoal || "Not Decided Yet"
        );
      } catch (error) {
        setGoalError(error.message);
      }
    };

    fetchCareerGoal();
  }, []);

  const handleGoalChange = async (e) => {
    const selectedGoal = e.target.value;

    setCareerGoal(selectedGoal);
    setGoalMessage("");
    setGoalError("");
    setSavingGoal(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
       `${import.meta.env.VITE_API_URL}/api/auth/goal` ,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            careerGoal: selectedGoal,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update career goal"
        );
      }

      setGoalMessage(
        "Career goal updated successfully."
      );
    } catch (error) {
      setGoalError(error.message);
    } finally {
      setSavingGoal(false);
    }
  };

  return (
    <div className="profile">

      <div className="page-heading">
        <div>
          <h2>My Profile</h2>

          <p>
            Manage your personal and professional
            information.
          </p>
        </div>

        <button className="primary-btn">
          Edit Profile
        </button>
      </div>

      <div className="profile-grid">

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

        <div className="profile-card">

          <h3>Career Goal</h3>

          <p className="profile-about">
            Choose your career goal to get a
            personalized learning roadmap.
          </p>

          <div className="form-group">

            <label>My Career Goal</label>

            <select
  className="career-goal-select"
  value={careerGoal}
  onChange={handleGoalChange}
  disabled={savingGoal}
>

              {careerGoals.map((goal) => (
                <option
                  key={goal}
                  value={goal}
                >
                  {goal}
                </option>
              ))}

            </select>

          </div>

          {savingGoal && (
            <p>
              Saving career goal...
            </p>
          )}

          {goalMessage && (
            <div className="auth-success">
              {goalMessage}
            </div>
          )}

          {goalError && (
            <div className="auth-error">
              {goalError}
            </div>
          )}

        </div>

        <div className="profile-card">

          <h3>About Me</h3>

          <p className="profile-about">
            I am a Computer Science student interested
            in software development, Java, web
            technologies and building practical
            projects.
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