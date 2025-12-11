const TransportService = require('../services/TransportService');
module.exports = {
  create: async (req, res) => {
    try {
      const newTransport = await TransportService.create(req.body);
      res.status(201).json(newTransport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allTransport = await TransportService.findAll();
      res.status(200).json(allTransport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getTransportById = await TransportService.findById(req.params.id);
      res.status(200).json(getTransportById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedTransport = await TransportService.update(req.params.id, req.body);
      res.status(200).json(updatedTransport);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await TransportService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};