const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const skillRoutes = require("./routes/skillRoutes");

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SkillSphere server running on port ${PORT}`);
});