const LocationService = require('../services/LocationService');
module.exports = {
  create: async (req, res) => {
    try {
      const newLocation = await LocationService.create(req.body);
      res.status(201).json(newLocation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allLocation = await LocationService.findAll();
      res.status(200).json(allLocation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getLocationById = await LocationService.findById(req.params.id);
      res.status(200).json(getLocationById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedLocation = await LocationService.update(req.params.id, req.body);
      res.status(200).json(updatedLocation);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await LocationService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};