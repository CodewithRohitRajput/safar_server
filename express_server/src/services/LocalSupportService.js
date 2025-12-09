
const LocalSupport = require('../models/library/LocalSupport');
class LocalSupportService {
  async create(data) { return await LocalSupport.create(data); }
  async findAll() { return await LocalSupport.find(); }
  async findById(id) { return await LocalSupport.findById(id); }
  async update(id,data) { return await LocalSupport.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await LocalSupport.findByIdAndDelete(id); }
}
module.exports = new LocalSupportService();
