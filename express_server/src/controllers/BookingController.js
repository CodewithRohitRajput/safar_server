
const BookingService = require('../services/BookingService');
module.exports = {
  create: async (req,res)=>{ res.json(await BookingService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await BookingService.findAll()); },
  getOne: async (req,res)=>{ res.json(await BookingService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await BookingService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await BookingService.delete(req.params.id)); },
};
