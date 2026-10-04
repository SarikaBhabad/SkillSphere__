import { useEffect, useState } from "react";

const roadmapData = {
  "Java Full Stack Developer": {
    description:
      "Build strong Java, backend, database and frontend skills to become a job-ready full stack developer.",
    steps: [
      {
        title: "Java Fundamentals",
        description:
          "Learn Java syntax, OOP, collections, exception handling and core programming concepts.",
        progress: 70,
      },
      {
        title: "SQL & Database",
        description:
          "Learn SQL, database design, joins, queries and relational database concepts.",
        progress: 60,
      },
      {
        title: "Backend Development",
        description:
          "Learn Spring Boot, REST APIs, authentication and backend architecture.",
        progress: 40,
      },
      {
        title: "Frontend Development",
        description:
          "Build responsive interfaces using HTML, CSS, JavaScript and React.",
        progress: 50,
      },
      {
        title: "Full Stack Projects",
        description:
          "Build real-world applications connecting frontend, backend and databases.",
        progress: 30,
      },
      {
        title: "DSA & Interview Preparation",
        description:
          "Practice data structures, algorithms, aptitude and technical interviews.",
        progress: 20,
      },
    ],
  },

  "Frontend Developer": {
    description:
      "Master modern frontend development and build responsive, interactive web applications.",
    steps: [
      {
        title: "HTML & CSS",
        description:
          "Learn semantic HTML, layouts, responsive design and modern CSS.",
        progress: 70,
      },
      {
        title: "JavaScript",
        description:
          "Learn DOM, events, asynchronous JavaScript, APIs and modern ES6+ features.",
        progress: 60,
      },
      {
        title: "React",
        description:
          "Learn components, props, state, hooks, routing and API integration.",
        progress: 50,
      },
      {
        title: "UI/UX & Responsive Design",
        description:
          "Create accessible, responsive and visually polished interfaces.",
        progress: 40,
      },
      {
        title: "Frontend Projects",
        description:
          "Build portfolio-quality web applications using modern frontend tools.",
        progress: 30,
      },
      {
        title: "Frontend Interview Preparation",
        description:
          "Prepare JavaScript, React, browser and frontend interview concepts.",
        progress: 20,
      },
    ],
  },

  "Backend Developer": {
    description:
      "Build scalable backend systems, APIs, authentication and database-driven applications.",
    steps: [
      {
        title: "Programming Fundamentals",
        description:
          "Strengthen programming, OOP, data structures and problem solving.",
        progress: 70,
      },
      {
        title: "Database Development",
        description:
          "Learn SQL, database design, queries, indexing and transactions.",
        progress: 60,
      },
      {
        title: "REST API Development",
        description:
          "Build secure REST APIs with authentication, validation and error handling.",
        progress: 50,
      },
      {
        title: "Backend Framework",
        description:
          "Learn Spring Boot or another production backend framework.",
        progress: 40,
      },
      {
        title: "Backend Projects",
        description:
          "Build real-world API-driven applications and backend services.",
        progress: 30,
      },
      {
        title: "Deployment & Interview Preparation",
        description:
          "Learn deployment basics and prepare for backend technical interviews.",
        progress: 20,
      },
    ],
  },

  "Python Developer": {
    description:
      "Build strong Python programming and backend development skills.",
    steps: [
      {
        title: "Python Fundamentals",
        description:
          "Learn Python syntax, data structures, functions and modules.",
        progress: 70,
      },
      {
        title: "Object-Oriented Python",
        description:
          "Learn classes, inheritance, exceptions and reusable Python code.",
        progress: 60,
      },
      {
        title: "Web Development",
        description:
          "Learn Django or Flask and build backend applications.",
        progress: 40,
      },
      {
        title: "APIs & Databases",
        description:
          "Build REST APIs and connect Python applications with databases.",
        progress: 35,
      },
      {
        title: "Python Projects",
        description:
          "Build practical Python applications for your portfolio.",
        progress: 30,
      },
      {
        title: "Interview Preparation",
        description:
          "Practice Python, problem solving and technical interview questions.",
        progress: 20,
      },
    ],
  },

  "Data Analyst": {
    description:
      "Learn how to collect, clean, analyze and visualize data to support business decisions.",
    steps: [
      {
        title: "Excel & Data Basics",
        description:
          "Learn formulas, functions, pivot tables and data cleaning.",
        progress: 70,
      },
      {
        title: "SQL",
        description:
          "Learn queries, joins, aggregation, subqueries and database analysis.",
        progress: 60,
      },
      {
        title: "Python for Data Analysis",
        description:
          "Learn Python, NumPy and Pandas for data manipulation.",
        progress: 40,
      },
      {
        title: "Data Visualization",
        description:
          "Create meaningful charts, dashboards and reports.",
        progress: 30,
      },
      {
        title: "Power BI",
        description:
          "Build interactive business intelligence dashboards.",
        progress: 25,
      },
      {
        title: "Data Analyst Portfolio",
        description:
          "Create real-world analysis projects and prepare for interviews.",
        progress: 20,
      },
    ],
  },

  "AI / Machine Learning Developer": {
    description:
      "Build foundations in Python, mathematics, machine learning and AI systems.",
    steps: [
      {
        title: "Python Programming",
        description:
          "Build strong Python programming and problem-solving skills.",
        progress: 70,
      },
      {
        title: "Mathematics for ML",
        description:
          "Learn statistics, probability, linear algebra and basic calculus.",
        progress: 40,
      },
      {
        title: "Machine Learning",
        description:
          "Learn supervised, unsupervised and model evaluation techniques.",
        progress: 30,
      },
      {
        title: "Deep Learning",
        description:
          "Learn neural networks and modern deep learning concepts.",
        progress: 20,
      },
      {
        title: "AI Projects",
        description:
          "Build practical machine learning and AI applications.",
        progress: 15,
      },
      {
        title: "AI Interview Preparation",
        description:
          "Prepare machine learning concepts, projects and technical interviews.",
        progress: 10,
      },
    ],
  },

  "Generative AI Developer": {
    description:
      "Learn modern generative AI development including LLMs, RAG and AI agents.",
    steps: [
      {
        title: "Python & AI Fundamentals",
        description:
          "Build Python and artificial intelligence foundations.",
        progress: 70,
      },
      {
        title: "LLMs & Prompt Engineering",
        description:
          "Understand large language models, prompts and model interaction.",
        progress: 50,
      },
      {
        title: "Embeddings & Vector Databases",
        description:
          "Learn embeddings, semantic search and vector databases.",
        progress: 30,
      },
      {
        title: "RAG Applications",
        description:
          "Build retrieval-augmented generation applications.",
        progress: 20,
      },
      {
        title: "AI Agents",
        description:
          "Learn agent workflows, tools, memory and multi-step AI systems.",
        progress: 15,
      },
      {
        title: "Generative AI Projects",
        description:
          "Build portfolio-quality AI applications.",
        progress: 10,
      },
    ],
  },

  "Mobile App Developer": {
    description:
      "Learn mobile development and build real applications for modern devices.",
    steps: [
      {
        title: "Programming Fundamentals",
        description:
          "Strengthen programming and object-oriented programming concepts.",
        progress: 70,
      },
      {
        title: "Mobile Development Basics",
        description:
          "Learn Android, Flutter or another mobile development framework.",
        progress: 50,
      },
      {
        title: "UI Development",
        description:
          "Build responsive mobile interfaces and navigation.",
        progress: 40,
      },
      {
        title: "APIs & Databases",
        description:
          "Connect mobile applications with backend APIs and databases.",
        progress: 30,
      },
      {
        title: "Mobile Projects",
        description:
          "Build and test real-world mobile applications.",
        progress: 20,
      },
      {
        title: "Publishing & Interview Preparation",
        description:
          "Learn deployment and prepare for mobile developer roles.",
        progress: 10,
      },
    ],
  },

  "Cloud / DevOps Engineer": {
    description:
      "Learn infrastructure, automation, containers, CI/CD and cloud platforms.",
    steps: [
      {
        title: "Linux & Networking",
        description:
          "Learn Linux commands, processes, networking and system basics.",
        progress: 60,
      },
      {
        title: "Git & Version Control",
        description:
          "Learn Git workflows, branching and collaboration.",
        progress: 70,
      },
      {
        title: "Docker",
        description:
          "Learn containers, images, Dockerfiles and container workflows.",
        progress: 40,
      },
      {
        title: "CI/CD",
        description:
          "Build automated testing and deployment pipelines.",
        progress: 30,
      },
      {
        title: "Cloud Platforms",
        description:
          "Learn AWS, Azure or another major cloud platform.",
        progress: 20,
      },
      {
        title: "DevOps Projects",
        description:
          "Deploy and monitor real applications using cloud and DevOps tools.",
        progress: 10,
      },
    ],
  },

  "Cybersecurity Engineer": {
    description:
      "Build foundations in networking, operating systems, security and ethical hacking.",
    steps: [
      {
        title: "Networking Fundamentals",
        description:
          "Learn TCP/IP, HTTP, DNS, ports and network architecture.",
        progress: 60,
      },
      {
        title: "Linux & Operating Systems",
        description:
          "Learn Linux administration, processes, permissions and system security.",
        progress: 50,
      },
      {
        title: "Security Fundamentals",
        description:
          "Learn authentication, encryption, vulnerabilities and security principles.",
        progress: 40,
      },
      {
        title: "Web Security",
        description:
          "Understand common web vulnerabilities and secure development practices.",
        progress: 30,
      },
      {
        title: "Security Tools & Labs",
        description:
          "Practice security concepts using legal learning environments and labs.",
        progress: 20,
      },
      {
        title: "Cybersecurity Projects",
        description:
          "Build security-focused projects and prepare for entry-level roles.",
        progress: 10,
      },
    ],
  },

  "Not Decided Yet": {
    description:
      "Explore different technology careers and choose a direction that matches your interests.",
    steps: [
      {
        title: "Explore Programming",
        description:
          "Try different programming languages and understand the basics.",
        progress: 0,
      },
      {
        title: "Explore Web Development",
        description:
          "Learn basic HTML, CSS and JavaScript.",
        progress: 0,
      },
      {
        title: "Explore Data & AI",
        description:
          "Understand data analysis, Python and artificial intelligence.",
        progress: 0,
      },
      {
        title: "Explore Backend & Cloud",
        description:
          "Learn what APIs, databases, servers and cloud platforms do.",
        progress: 0,
      },
      {
        title: "Build a Small Project",
        description:
          "Try a small project in an area you enjoy.",
        progress: 0,
      },
      {
        title: "Choose Your Career Goal",
        description:
          "Select a career direction and start your personalized roadmap.",
        progress: 0,
      },
    ],
  },
};

function Roadmap() {
  const [careerGoal, setCareerGoal] = useState(
    "Not Decided Yet"
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCareerGoal = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/auth/goal",
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerGoal();
  }, []);

  if (loading) {
    return <p>Loading your roadmap...</p>;
  }

  const roadmap =
    roadmapData[careerGoal] ||
    roadmapData["Not Decided Yet"];

  return (
    <div className="roadmap">

      <div className="page-heading">
        <div>
          <h2>My Roadmap</h2>

          <p>
            Your personalized learning journey based on
            your career goal.
          </p>
        </div>
      </div>

      {error && (
        <div className="auth-error">
          {error}
        </div>
      )}

      <div className="dashboard-card roadmap-goal">

        <div className="roadmap-goal-icon">
          🎯
        </div>

        <div>
          <span className="roadmap-label">
            Career Goal
          </span>

          <h3>{careerGoal}</h3>

          <p>
            {roadmap.description}
          </p>
        </div>

      </div>

      <div className="roadmap-list">

        {roadmap.steps.map((step, index) => {

          const status =
            step.progress >= 70
              ? "Completed"
              : step.progress > 0
              ? "In Progress"
              : "Upcoming";

          return (
            <div
              className="dashboard-card roadmap-card"
              key={step.title}
            >

              <div className="roadmap-number">
                {index + 1}
              </div>

              <div className="roadmap-content">

                <div className="roadmap-card-header">

                  <div>
                    <h3>{step.title}</h3>

                    <p>
                      {step.description}
                    </p>
                  </div>

                  <span
                    className={
                      status === "In Progress"
                        ? "roadmap-status active"
                        : "roadmap-status"
                    }
                  >
                    {status}
                  </span>

                </div>

                <div className="progress-info">
                  <span>Progress</span>

                  <strong>
                    {step.progress}%
                  </strong>
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
          );
        })}

      </div>

    </div>
  );
}

export default Roadmap;