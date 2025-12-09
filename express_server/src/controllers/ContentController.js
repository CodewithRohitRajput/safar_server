
const ContentService = require('../services/ContentService');
module.exports = {
  create: async (req,res)=>{ res.json(await ContentService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await ContentService.findAll()); },
  getOne: async (req,res)=>{ res.json(await ContentService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await ContentService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await ContentService.delete(req.params.id)); },
};
