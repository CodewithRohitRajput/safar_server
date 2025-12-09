
const LeadService = require('../services/LeadService');
module.exports = {
  create: async (req,res)=>{ res.json(await LeadService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await LeadService.findAll()); },
  getOne: async (req,res)=>{ res.json(await LeadService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await LeadService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await LeadService.delete(req.params.id)); },
};
