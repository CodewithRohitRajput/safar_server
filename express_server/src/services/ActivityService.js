
const Activity = require('../models/library/Activity');
class ActivityService {
  async create(data) { return await Activity.create(data); }
  async findAll() { return await Activity.find(); }
  async findById(id) { return await Activity.findById(id); }
  async update(id,data) { return await Activity.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Activity.findByIdAndDelete(id); }
}
module.exports = new ActivityService();
