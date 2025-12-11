const CategoryService = require('../services/CategoryService');
module.exports = {
  create: async (req, res) => {
    try {
      const newCategory = await CategoryService.create(req.body);
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allCategory = await CategoryService.findAll();
      res.status(200).json(allCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getCategoryById = await CategoryService.findById(req.params.id);
      res.status(200).json(getCategoryById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedCategory = await CategoryService.update(req.params.id, req.body);
      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await CategoryService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};