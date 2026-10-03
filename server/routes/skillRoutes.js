const express = require("express");
const Skill = require("../models/Skill");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// GET all skills of logged-in student
router.get("/", protect, async (req, res) => {
  try {
    const skills = await Skill.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(skills);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch skills",
      error: error.message,
    });
  }
});

// ADD a new skill
router.post("/", protect, async (req, res) => {
  try {
    const { name, category, level, progress } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Skill name is required",
      });
    }

    const skill = await Skill.create({
      user: req.user.id,
      name,
      category,
      level,
      progress,
    });

    res.status(201).json({
      message: "Skill added successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add skill",
      error: error.message,
    });
  }
});

// UPDATE a skill
router.put("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    const { name, category, level, progress } = req.body;

    skill.name = name ?? skill.name;
    skill.category = category ?? skill.category;
    skill.level = level ?? skill.level;
    skill.progress = progress ?? skill.progress;

    await skill.save();

    res.json({
      message: "Skill updated successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update skill",
      error: error.message,
    });
  }
});

// DELETE a skill
router.delete("/:id", protect, async (req, res) => {
  try {
    const skill = await Skill.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!skill) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    res.json({
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete skill",
      error: error.message,
    });
  }
});

module.exports = router;