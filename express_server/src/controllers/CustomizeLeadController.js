
const CustomizeLeadService = require('../services/CustomizeLeadService');
module.exports = {
  create: async (req,res)=>{ res.json(await CustomizeLeadService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await CustomizeLeadService.findAll()); },
  getOne: async (req,res)=>{ res.json(await CustomizeLeadService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await CustomizeLeadService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await CustomizeLeadService.delete(req.params.id)); },
};
