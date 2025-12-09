
const Content = require('../models/website/Content');
class ContentService {
  async create(data) { return await Content.create(data); }
  async findAll() { return await Content.find(); }
  async findById(id) { return await Content.findById(id); }
  async update(id,data) { return await Content.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Content.findByIdAndDelete(id); }
}
module.exports = new ContentService();
