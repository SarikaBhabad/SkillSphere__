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
keywords: ["java", "core java", "oops", "oop"],
},
{
title: "SQL & Database",
description:
"Learn SQL, database design, joins, queries and relational database concepts.",
keywords: ["sql", "mysql", "mongodb", "database", "dbms"],
},
{
title: "Backend Development",
description:
"Learn Spring Boot, REST APIs, authentication and backend architecture.",
keywords: [
"spring",
"spring boot",
"backend",
"rest",
"api",
"node",
"express",
],
},
{
title: "Frontend Development",
description:
"Build responsive interfaces using HTML, CSS, JavaScript and React.",
keywords: ["html", "css", "javascript", "js", "react", "frontend"],
},
{
title: "Full Stack Projects",
description:
"Build real-world applications connecting frontend, backend and databases.",
keywords: ["full stack", "fullstack"],
usesProjects: true,
},
{
title: "DSA & Interview Preparation",
description:
"Practice data structures, algorithms, aptitude and technical interviews.",
keywords: ["dsa", "data structures", "algorithms", "aptitude"],
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
keywords: ["html", "css"],
},
{
title: "JavaScript",
description:
"Learn DOM, events, asynchronous JavaScript, APIs and modern ES6+ features.",
keywords: ["javascript", "js", "typescript"],
},
{
title: "React",
description:
"Learn components, props, state, hooks, routing and API integration.",
keywords: ["react", "reactjs"],
},
{
title: "UI/UX & Responsive Design",
description:
"Create accessible, responsive and visually polished interfaces.",
keywords: ["ui", "ux", "responsive design", "tailwind", "css"],
},
{
title: "Frontend Projects",
description:
"Build portfolio-quality web applications using modern frontend tools.",
keywords: ["frontend", "react", "web"],
usesProjects: true,
},
{
title: "Frontend Interview Preparation",
description:
"Prepare JavaScript, React, browser and frontend interview concepts.",
keywords: ["javascript", "react", "frontend", "dsa"],
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
keywords: ["java", "python", "javascript", "programming", "oop"],
},
{
title: "Database Development",
description:
"Learn SQL, database design, queries, indexing and transactions.",
keywords: ["sql", "mysql", "mongodb", "database", "dbms"],
},
{
title: "REST API Development",
description:
"Build secure REST APIs with authentication, validation and error handling.",
keywords: ["rest", "api", "express", "node", "spring"],
},
{
title: "Backend Framework",
description:
"Learn Spring Boot or another production backend framework.",
keywords: ["spring", "spring boot", "node", "express", "django"],
},
{
title: "Backend Projects",
description:
"Build real-world API-driven applications and backend services.",
keywords: ["backend", "api"],
usesProjects: true,
},
{
title: "Deployment & Interview Preparation",
description:
"Learn deployment basics and prepare for backend technical interviews.",
keywords: ["docker", "aws", "cloud", "devops", "dsa"],
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
keywords: ["python"],
},
{
title: "Object-Oriented Python",
description:
"Learn classes, inheritance, exceptions and reusable Python code.",
keywords: ["python", "oop"],
},
{
title: "Web Development",
description:
"Learn Django or Flask and build backend applications.",
keywords: ["django", "flask", "python", "backend"],
},
{
title: "APIs & Databases",
description:
"Build REST APIs and connect Python applications with databases.",
keywords: ["api", "rest", "sql", "database", "python"],
},
{
title: "Python Projects",
description:
"Build practical Python applications for your portfolio.",
keywords: ["python"],
usesProjects: true,
},
{
title: "Interview Preparation",
description:
"Practice Python, problem solving and technical interview questions.",
keywords: ["python", "dsa", "algorithms"],
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
keywords: ["excel", "data"],
},
{
title: "SQL",
description:
"Learn queries, joins, aggregation, subqueries and database analysis.",
keywords: ["sql", "mysql", "database"],
},
{
title: "Python for Data Analysis",
description:
"Learn Python, NumPy and Pandas for data manipulation.",
keywords: ["python", "pandas", "numpy"],
},
{
title: "Data Visualization",
description:
"Create meaningful charts, dashboards and reports.",
keywords: ["power bi", "tableau", "visualization", "data"],
},
{
title: "Power BI",
description:
"Build interactive business intelligence dashboards.",
keywords: ["power bi", "bi"],
},
{
title: "Data Analyst Portfolio",
description:
"Create real-world analysis projects and prepare for interviews.",
keywords: ["data analyst", "sql", "python"],
usesProjects: true,
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
keywords: ["python"],
},
{
title: "Mathematics for ML",
description:
"Learn statistics, probability, linear algebra and basic calculus.",
keywords: ["statistics", "mathematics", "math", "linear algebra"],
},
{
title: "Machine Learning",
description:
"Learn supervised, unsupervised and model evaluation techniques.",
keywords: ["machine learning", "ml", "scikit", "sklearn"],
},
{
title: "Deep Learning",
description:
"Learn neural networks and modern deep learning concepts.",
keywords: ["deep learning", "tensorflow", "pytorch", "neural"],
},
{
title: "AI Projects",
description:
"Build practical machine learning and AI applications.",
keywords: ["ai", "machine learning", "ml"],
usesProjects: true,
},
{
title: "AI Interview Preparation",
description:
"Prepare machine learning concepts, projects and technical interviews.",
keywords: ["ai", "machine learning", "dsa"],
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
keywords: ["python", "ai"],
},
{
title: "LLMs & Prompt Engineering",
description:
"Understand large language models, prompts and model interaction.",
keywords: ["llm", "prompt engineering", "generative ai", "genai"],
},
{
title: "Embeddings & Vector Databases",
description:
"Learn embeddings, semantic search and vector databases.",
keywords: ["embeddings", "vector database", "pinecone", "chroma"],
},
{
title: "RAG Applications",
description:
"Build retrieval-augmented generation applications.",
keywords: ["rag", "retrieval", "generative ai"],
},
{
title: "AI Agents",
description:
"Learn agent workflows, tools, memory and multi-step AI systems.",
keywords: ["agents", "ai agents", "agentic ai", "n8n"],
},
{
title: "Generative AI Projects",
description:
"Build portfolio-quality AI applications.",
keywords: ["generative ai", "genai", "llm", "ai"],
usesProjects: true,
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
keywords: ["java", "kotlin", "dart", "python", "programming"],
},
{
title: "Mobile Development Basics",
description:
"Learn Android, Flutter or another mobile development framework.",
keywords: ["android", "flutter", "react native", "kotlin"],
},
{
title: "UI Development",
description:
"Build responsive mobile interfaces and navigation.",
keywords: ["flutter", "android", "react native", "ui"],
},
{
title: "APIs & Databases",
description:
"Connect mobile applications with backend APIs and databases.",
keywords: ["api", "rest", "firebase", "database"],
},
{
title: "Mobile Projects",
description:
"Build and test real-world mobile applications.",
keywords: ["android", "flutter", "mobile"],
usesProjects: true,
},
{
title: "Publishing & Interview Preparation",
description:
"Learn deployment and prepare for mobile developer roles.",
keywords: ["android", "flutter", "mobile", "dsa"],
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
keywords: ["linux", "networking", "network"],
},
{
title: "Git & Version Control",
description:
"Learn Git workflows, branching and collaboration.",
keywords: ["git", "github", "version control"],
},
{
title: "Docker",
description:
"Learn containers, images, Dockerfiles and container workflows.",
keywords: ["docker", "containers"],
},
{
title: "CI/CD",
description:
"Build automated testing and deployment pipelines.",
keywords: ["ci/cd", "jenkins", "github actions", "cicd"],
},
{
title: "Cloud Platforms",
description:
"Learn AWS, Azure or another major cloud platform.",
keywords: ["aws", "azure", "cloud"],
},
{
title: "DevOps Projects",
description:
"Deploy and monitor real applications using cloud and DevOps tools.",
keywords: ["devops", "cloud", "docker"],
usesProjects: true,
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
keywords: ["networking", "network", "tcp", "http", "dns"],
},
{
title: "Linux & Operating Systems",
description:
"Learn Linux administration, processes, permissions and system security.",
keywords: ["linux", "operating systems", "os"],
},
{
title: "Security Fundamentals",
description:
"Learn authentication, encryption, vulnerabilities and security principles.",
keywords: ["security", "cybersecurity", "encryption"],
},
{
title: "Web Security",
description:
"Understand common web vulnerabilities and secure development practices.",
keywords: ["web security", "owasp", "security"],
},
{
title: "Security Tools & Labs",
description:
"Practice security concepts using legal learning environments and labs.",
keywords: ["kali", "burp", "security", "cybersecurity"],
},
{
title: "Cybersecurity Projects",
description:
"Build security-focused projects and prepare for entry-level roles.",
keywords: ["cybersecurity", "security"],
usesProjects: true,
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
keywords: ["java", "python", "javascript", "programming"],
},
{
title: "Explore Web Development",
description:
"Learn basic HTML, CSS and JavaScript.",
keywords: ["html", "css", "javascript"],
},
{
title: "Explore Data & AI",
description:
"Understand data analysis, Python and artificial intelligence.",
keywords: ["python", "data", "ai"],
},
{
title: "Explore Backend & Cloud",
description:
"Learn what APIs, databases, servers and cloud platforms do.",
keywords: ["backend", "api", "database", "cloud"],
},
{
title: "Build a Small Project",
description:
"Try a small project in an area you enjoy.",
keywords: ["project"],
usesProjects: true,
},
{
title: "Choose Your Career Goal",
description:
"Select a career direction and start your personalized roadmap.",
keywords: [],
},
],
},
};

function calculateStepProgress(step, skills, projects) {
if (step.title === "Choose Your Career Goal") {
return 0;
}

if (step.usesProjects) {
return Math.min(projects.length * 25, 100);
}

if (!step.keywords || step.keywords.length === 0) {
return 0;
}

const matchingSkills = skills.filter((skill) => {
const skillName = (skill.name || "").toLowerCase();

return step.keywords.some((keyword) =>
  skillName.includes(keyword.toLowerCase())
);

});

if (matchingSkills.length === 0) {
return 0;
}

const averageProgress =
matchingSkills.reduce(
(total, skill) => total + Number(skill.progress || 0),
0
) / matchingSkills.length;

return Math.round(Math.min(100, averageProgress));
}

function Roadmap() {
const [careerGoal, setCareerGoal] = useState("Not Decided Yet");
const [skills, setSkills] = useState([]);
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const fetchRoadmapData = async () => {
try {
const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const [
      goalResponse,
      skillsResponse,
      projectsResponse,
    ] = await Promise.all([
      fetch(`${import.meta.env.VITE_API_URL}/api/auth/goal`, {
        headers,
      }),

      fetch(`${import.meta.env.VITE_API_URL}/api/skills`, {
        headers,
      }),

      fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
        headers,
      }),
    ]);

    const goalData = await goalResponse.json();
    const skillsData = await skillsResponse.json();
    const projectsData = await projectsResponse.json();

    if (!goalResponse.ok) {
      throw new Error(
        goalData.message || "Failed to fetch career goal"
      );
    }

    if (!skillsResponse.ok) {
      throw new Error(
        skillsData.message || "Failed to fetch skills"
      );
    }

    if (!projectsResponse.ok) {
      throw new Error(
        projectsData.message || "Failed to fetch projects"
      );
    }

    setCareerGoal(goalData.careerGoal || "Not Decided Yet");

    setSkills(
      Array.isArray(skillsData)
        ? skillsData
        : []
    );

    setProjects(
      Array.isArray(projectsData)
        ? projectsData
        : []
    );
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
};

fetchRoadmapData();

}, []);

if (loading) {
return <p>Loading your roadmap...</p>;
}

const roadmap =
roadmapData[careerGoal] ||
roadmapData["Not Decided Yet"];

const calculatedSteps = roadmap.steps.map(
(step) => ({
...step,
progress: calculateStepProgress(
step,
skills,
projects
),
})
);

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

    {calculatedSteps.map((step, index) => {

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