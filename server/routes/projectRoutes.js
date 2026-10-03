const express = require("express");
const Project = require("../models/Project");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// GET all projects of logged-in student
router.get("/", protect, async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch projects",
      error: error.message,
    });
  }
});

// ADD a new project
router.post("/", protect, async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      githubLink,
      status,
    } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Project title is required",
      });
    }

    const project = await Project.create({
      user: req.user.id,
      title,
      description,
      technologies,
      githubLink,
      status,
    });

    res.status(201).json({
      message: "Project added successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add project",
      error: error.message,
    });
  }
});

// UPDATE a project
router.put("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const {
      title,
      description,
      technologies,
      githubLink,
      status,
    } = req.body;

    project.title = title ?? project.title;
    project.description = description ?? project.description;
    project.technologies = technologies ?? project.technologies;
    project.githubLink = githubLink ?? project.githubLink;
    project.status = status ?? project.status;

    await project.save();

    res.json({
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update project",
      error: error.message,
    });
  }
});

// DELETE a project
router.delete("/:id", protect, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json({
      message: "Project deleted successfully",
    });
 } catch (error) {
  res.status(500).json({
    message: "Failed to delete project",
    error: error.message,
  });
}
});

module.exports = router;