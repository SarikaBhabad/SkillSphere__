function Achievements() {
  const achievements = [
    {
      title: "Java Programming Certificate",
      type: "Certificate",
      description:
        "Completed a Java programming course covering OOP, collections and exception handling.",
      date: "2026",
      icon: "🏆",
    },
    {
      title: "Web Development Workshop",
      type: "Workshop",
      description:
        "Participated in a hands-on workshop focused on modern web development.",
      date: "2026",
      icon: "🎓",
    },
    {
      title: "Hackathon Participation",
      type: "Competition",
      description:
        "Participated in a student hackathon and developed a technology-based solution.",
      date: "2026",
      icon: "🚀",
    },
    {
      title: "Academic Achievement",
      type: "Academic",
      description:
        "Successfully completed academic coursework and practical computer science projects.",
      date: "2026",
      icon: "⭐",
    },
  ];

  return (
    <div className="achievements">
      <div className="page-heading">
        <div>
          <h2>Achievements</h2>
          <p>Track your certificates, workshops and accomplishments.</p>
        </div>

        <button className="primary-btn">+ Add Achievement</button>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <div className="achievement-content">
              <div className="achievement-top">
                <span className="achievement-type">
                  {achievement.type}
                </span>

                <span className="achievement-date">
                  {achievement.date}
                </span>
              </div>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>

              <button className="secondary-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;