
const ReviewService = require('../services/ReviewService');
module.exports = {
  create: async (req,res)=>{ res.json(await ReviewService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await ReviewService.findAll()); },
  getOne: async (req,res)=>{ res.json(await ReviewService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await ReviewService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await ReviewService.delete(req.params.id)); },
};
