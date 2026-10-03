const express = require("express");

const User = require("../models/User");
const Skill = require("../models/Skill");
const Project = require("../models/Project");
const Achievement = require("../models/Achievement");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/students", protect, adminOnly, async (req, res) => {
  try {
    const students = await User.find({
      role: "student",
    })
      .select("-password")
      .sort({ createdAt: -1 });

    const studentsWithStats = await Promise.all(
      students.map(async (student) => {
        const [skillCount, projectCount, achievementCount] =
          await Promise.all([
            Skill.countDocuments({
              user: student._id,
            }),

            Project.countDocuments({
              user: student._id,
            }),

            Achievement.countDocuments({
              user: student._id,
            }),
          ]);

        return {
          _id: student._id,
          name: student.name,
          email: student.email,
          role: student.role,
          createdAt: student.createdAt,
          skillCount,
          projectCount,
          achievementCount,
        };
      })
    );

    res.json(studentsWithStats);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
});

module.exports = router;