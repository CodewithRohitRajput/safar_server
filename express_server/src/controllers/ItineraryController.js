
const ItineraryService = require('../services/ItineraryService');
module.exports = {
  create: async (req,res)=>{ res.json(await ItineraryService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await ItineraryService.findAll()); },
  getOne: async (req,res)=>{ res.json(await ItineraryService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await ItineraryService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await ItineraryService.delete(req.params.id)); },
};
