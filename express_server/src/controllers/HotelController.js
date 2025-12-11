const HotelService = require('../services/HotelService');
module.exports = {
  create: async (req, res) => {
    try {
      const newHotel = await HotelService.create(req.body);
      res.status(201).json(newHotel);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const allHotel = await HotelService.findAll();
      res.status(200).json(allHotel);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getOne: async (req, res) => {
    try {
      const getHotelById = await HotelService.findById(req.params.id);
      res.status(200).json(getHotelById);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedHotel = await HotelService.update(req.params.id, req.body);
      res.status(200).json(updatedHotel);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      await HotelService.delete(req.params.id);
      res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};