
const index = require('../models/index');
class indexService {
  async create(data) { return await index.create(data); }
  async findAll() { return await index.find(); }
  async findById(id) { return await index.findById(id); }
  async update(id,data) { return await index.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await index.findByIdAndDelete(id); }
}
module.exports = new indexService();
