
const CoordinatorService = require('../services/CoordinatorService');
module.exports = {
  create: async (req,res)=>{ res.json(await CoordinatorService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await CoordinatorService.findAll()); },
  getOne: async (req,res)=>{ res.json(await CoordinatorService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await CoordinatorService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await CoordinatorService.delete(req.params.id)); },
};
