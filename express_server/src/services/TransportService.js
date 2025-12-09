
const Transport = require('../models/library/Transport');
class TransportService {
  async create(data) { return await Transport.create(data); }
  async findAll() { return await Transport.find(); }
  async findById(id) { return await Transport.findById(id); }
  async update(id,data) { return await Transport.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Transport.findByIdAndDelete(id); }
}
module.exports = new TransportService();
