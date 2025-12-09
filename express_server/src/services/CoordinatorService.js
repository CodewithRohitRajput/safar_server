
const Coordinator = require('../models/library/Coordinator');
class CoordinatorService {
  async create(data) { return await Coordinator.create(data); }
  async findAll() { return await Coordinator.find(); }
  async findById(id) { return await Coordinator.findById(id); }
  async update(id,data) { return await Coordinator.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Coordinator.findByIdAndDelete(id); }
}
module.exports = new CoordinatorService();
