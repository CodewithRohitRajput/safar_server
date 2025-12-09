
const CustomizeLead = require('../models/leads/CustomizeLead');
class CustomizeLeadService {
  async create(data) { return await CustomizeLead.create(data); }
  async findAll() { return await CustomizeLead.find(); }
  async findById(id) { return await CustomizeLead.findById(id); }
  async update(id,data) { return await CustomizeLead.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await CustomizeLead.findByIdAndDelete(id); }
}
module.exports = new CustomizeLeadService();
