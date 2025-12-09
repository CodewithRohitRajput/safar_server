
const VendorService = require('../services/VendorService');
module.exports = {
  create: async (req,res)=>{ res.json(await VendorService.create(req.body)); },
  getAll: async (req,res)=>{ res.json(await VendorService.findAll()); },
  getOne: async (req,res)=>{ res.json(await VendorService.findById(req.params.id)); },
  update: async (req,res)=>{ res.json(await VendorService.update(req.params.id, req.body)); },
  delete: async (req,res)=>{ res.json(await VendorService.delete(req.params.id)); },
};
