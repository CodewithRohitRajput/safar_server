
const ActivityService = require('../services/ActivityService');
module.exports = {
  create: async (req,res)=>{ res.json(await ActivityService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await ActivityService.findAll()); },
  getOne: async (req,res)=>{ res.json(await ActivityService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await ActivityService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await ActivityService.delete(req.params.id)); },
};
