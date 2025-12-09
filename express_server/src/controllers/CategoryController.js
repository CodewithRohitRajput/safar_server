
const CategoryService = require('../services/CategoryService');
module.exports = {
  create: async (req,res)=>{ res.json(await CategoryService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await CategoryService.findAll()); },
  getOne: async (req,res)=>{ res.json(await CategoryService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await CategoryService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await CategoryService.delete(req.params.id)); },
};
