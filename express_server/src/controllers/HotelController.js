
const HotelService = require('../services/HotelService');
module.exports = {
  create: async (req,res)=>{ res.json(await HotelService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await HotelService.findAll()); },
  getOne: async (req,res)=>{ res.json(await HotelService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await HotelService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await HotelService.delete(req.params.id)); },
};
