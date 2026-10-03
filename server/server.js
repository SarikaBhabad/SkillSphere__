const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const authRoutes = require("./routes/authRoutes");
const skillRoutes = require("./routes/skillRoutes");
const projectRoutes = require("./routes/projectRoutes");
const achievementRoutes = require("./routes/achievementRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SkillSphere API is running",
  });
});

// Authentication
app.use("/api/auth", authRoutes);

// Skills
app.use("/api/skills", skillRoutes);

// Projects
app.use("/api/projects", projectRoutes);

// Achievements
app.use("/api/achievements", achievementRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SkillSphere server running on port ${PORT}`);
});