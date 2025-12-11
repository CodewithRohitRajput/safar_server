const LocalSupportService = require('../services/LocalSupportService');
module.exports = {
  create: async (req, res) => {
    try {
      const newLocalSupport = await LocalSupportService.create(req.body);
      res.status(201).json(newLocalSupport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allLocalSupport = await LocalSupportService.findAll();
      res.status(200).json(allLocalSupport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getLocalSupportById = await LocalSupportService.findById(req.params.id);
      res.status(200).json(getLocalSupportById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedLocalSupport = await LocalSupportService.update(req.params.id, req.body);
      res.status(200).json(updatedLocalSupport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await LocalSupportService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};