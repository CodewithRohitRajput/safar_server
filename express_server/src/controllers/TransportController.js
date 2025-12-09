
const TransportService = require('../services/TransportService');
module.exports = {
  create: async (req,res)=>{ res.json(await TransportService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await TransportService.findAll()); },
  getOne: async (req,res)=>{ res.json(await TransportService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await TransportService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await TransportService.delete(req.params.id)); },
};
