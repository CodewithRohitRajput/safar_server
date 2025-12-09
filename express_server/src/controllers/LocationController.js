
const LocationService = require('../services/LocationService');
module.exports = {
  create: async (req,res)=>{ res.json(await LocationService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await LocationService.findAll()); },
  getOne: async (req,res)=>{ res.json(await LocationService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await LocationService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await LocationService.delete(req.params.id)); },
};
