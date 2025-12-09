
const indexService = require('../services/indexService');
module.exports = {
  create: async (req,res)=>{ res.json(await indexService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await indexService.findAll()); },
  getOne: async (req,res)=>{ res.json(await indexService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await indexService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await indexService.delete(req.params.id)); },
};
