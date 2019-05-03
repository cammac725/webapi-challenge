const express = require('express');
const Projects = require('../data/helpers/projectModel');

const router = express.Router();

router.use(express.json());

// Get all Projects
router.get('/', async (req, res) => {
  try {
    const projects = await Projects.get(req.query);
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving the projects'
    })
  }
})

// Get all a project's actions
router.get(':id/actions', async (req, res) => {
  try {
    const projectActions = await Projects.getProjectActions(req.params.id);
    res.status(200).json(projectActions)
  } catch (error) {
    res.status(500).json({
      message: 'Error getting the action for the project'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Projects.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: 'Project has been removed'
      })
    } else {
      res.status(404).json({
        message: 'The project could not be found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error removing the project'
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const project = await Projects.insert(req.body);
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({
      message: 'Error adding the project'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const project = await Projects.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project)
    } else {
      res.status(404).json({
        message: 'The project could not be found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error updating the project'
    })
  }
})

module.exports = router;
