
const InvoiceService = require('../services/InvoiceService');
module.exports = {
  create: async (req,res)=>{ res.json(await InvoiceService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await InvoiceService.findAll()); },
  getOne: async (req,res)=>{ res.json(await InvoiceService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await InvoiceService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await InvoiceService.delete(req.params.id)); },
};
