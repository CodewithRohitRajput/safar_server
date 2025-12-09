
const PaymentService = require('../services/PaymentService');
module.exports = {
  create: async (req,res)=>{ res.json(await PaymentService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await PaymentService.findAll()); },
  getOne: async (req,res)=>{ res.json(await PaymentService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await PaymentService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await PaymentService.delete(req.params.id)); },
};
