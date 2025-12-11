const ActivityService = require('../services/ActivityService');
module.exports = {
  create: async (req, res) => {
    try {
      const newActivity = await ActivityService.create(req.body);
      res.status(201).json(newActivity);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allActivity = await ActivityService.findAll();
      res.status(200).json(allActivity);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getActivityById = await ActivityService.findById(req.params.id);
      res.status(200).json(getActivityById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedActivity = await ActivityService.update(req.params.id, req.body);
      res.status(200).json(updatedActivity);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await ActivityService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};