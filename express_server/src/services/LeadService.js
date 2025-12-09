
const Lead = require('../models/leads/Lead');
class LeadService {
  async create(data) { return await Lead.create(data); }
  async findAll() { return await Lead.find(); }
  async findById(id) { return await Lead.findById(id); }
  async update(id,data) { return await Lead.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Lead.findByIdAndDelete(id); }
}
module.exports = new LeadService();
