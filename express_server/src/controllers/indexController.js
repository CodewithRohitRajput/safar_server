const indexService = require('../services/indexService');
module.exports = {
  create: async (req, res) => {
    try {
      const newIndex = await indexService.create(req.body);
      res.status(201).json(newIndex);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allIndex = await indexService.findAll();
      res.status(200).json(allIndex);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getIndexById = await indexService.findById(req.params.id);
      res.status(200).json(getIndexById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedIndex = await indexService.update(req.params.id, req.body);
      res.status(200).json(updatedIndex);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await indexService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};