const express = require('express');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.use(express.json());

router.get('/:id', async (req, res) => {
  try {
    const action = await Actions.get(req.params.id);
    if (action) {
      res.status(200).json(action)
    } else {
      res.status(404).json({
        message: 'Action could not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving the action'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Actions.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({
        message: 'The action has been removed'
      })
    } else {
      res.status(404).json({
        message: 'The action could not be found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error removing the action',
    });
  }
})

router.post('/', async (req, res) => {
  try {
    const action = await Actions.insert(req.body);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({
      message: 'Error adding the action'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const action = await Actions.update(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({
        message: 'The action could not be found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error udpating the action'
    })
  }
})

module.exports = router;