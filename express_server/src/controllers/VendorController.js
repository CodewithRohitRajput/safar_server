const VendorService = require('../services/VendorService');
module.exports = {
  create: async (req, res) => {
    try {
      const newVendor = await VendorService.create(req.body);
      res.status(201).json(newVendor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allVendor = await VendorService.findAll();
      res.status(200).json(allVendor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getVendorById = await VendorService.findById(req.params.id);
      res.status(200).json(getVendorById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedVendor = await VendorService.update(req.params.id, req.body);
      res.status(200).json(updatedVendor);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await VendorService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};