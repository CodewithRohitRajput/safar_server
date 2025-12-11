const LeadService = require('../services/LeadService');
module.exports = {
  create: async (req, res) => {
    try {
      const newLead = await LeadService.create(req.body);
      res.status(201).json(newLead);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allLead = await LeadService.findAll();
      res.status(200).json(allLead);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getLeadById = await LeadService.findById(req.params.id);
      res.status(200).json(getLeadById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedLead = await LeadService.update(req.params.id, req.body);
      res.status(200).json(updatedLead);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await LeadService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};