
const LocalSupportService = require('../services/LocalSupportService');
module.exports = {
  create: async (req,res)=>{ res.json(await LocalSupportService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await LocalSupportService.findAll()); },
  getOne: async (req,res)=>{ res.json(await LocalSupportService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await LocalSupportService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await LocalSupportService.delete(req.params.id)); },
};
