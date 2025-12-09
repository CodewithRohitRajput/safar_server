
const LedgerService = require('../services/LedgerService');
module.exports = {
  create: async (req,res)=>{ res.json(await LedgerService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await LedgerService.findAll()); },
  getOne: async (req,res)=>{ res.json(await LedgerService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await LedgerService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await LedgerService.delete(req.params.id)); },
};
