const express = require("express");
const Achievement = require("../models/Achievement");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// GET all achievements of logged-in student
router.get("/", protect, async (req, res) => {
  try {
    const achievements = await Achievement.find({
      user: req.user.id,
    }).sort({
      date: -1,
    });

    res.json(achievements);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch achievements",
      error: error.message,
    });
  }
});

// ADD a new achievement
router.post("/", protect, async (req, res) => {
  try {
    const { title, type, description, date } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Achievement title is required",
      });
    }

    const achievement = await Achievement.create({
      user: req.user.id,
      title,
      type,
      description,
      date,
    });

    res.status(201).json({
      message: "Achievement added successfully",
      achievement,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add achievement",
      error: error.message,
    });
  }
});

// UPDATE an achievement
router.put("/:id", protect, async (req, res) => {
  try {
    const achievement = await Achievement.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!achievement) {
      return res.status(404).json({
        message: "Achievement not found",
      });
    }

    const { title, type, description, date } = req.body;

    achievement.title = title ?? achievement.title;
    achievement.type = type ?? achievement.type;
    achievement.description = description ?? achievement.description;
    achievement.date = date ?? achievement.date;

    await achievement.save();

    res.json({
      message: "Achievement updated successfully",
      achievement,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update achievement",
      error: error.message,
    });
  }
});

// DELETE an achievement
router.delete("/:id", protect, async (req, res) => {
  try {
    const achievement = await Achievement.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!achievement) {
      return res.status(404).json({
        message: "Achievement not found",
      });
    }

    res.json({
      message: "Achievement deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete achievement",
      error: error.message,
    });
  }
});

module.exports = router;