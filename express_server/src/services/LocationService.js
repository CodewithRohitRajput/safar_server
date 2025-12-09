
const Location = require('../models/website/Location');
class LocationService {
  async create(data) { return await Location.create(data); }
  async findAll() { return await Location.find(); }
  async findById(id) { return await Location.findById(id); }
  async update(id,data) { return await Location.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Location.findByIdAndDelete(id); }
}
module.exports = new LocationService();
