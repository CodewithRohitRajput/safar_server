const ReviewService = require('../services/ReviewService');
module.exports = {
  create: async (req, res) => {
    try {
      const newReview = await ReviewService.create(req.body);
      res.status(201).json(newReview);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allReview = await ReviewService.findAll();
      res.status(200).json(allReview);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getReviewById = await ReviewService.findById(req.params.id);
      res.status(200).json(getReviewById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedReview = await ReviewService.update(req.params.id, req.body);
      res.status(200).json(updatedReview);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await ReviewService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};