
const Hotel = require('../models/library/Hotel');
class HotelService {
  async create(data) { return await Hotel.create(data); }
  async findAll() { return await Hotel.find(); }
  async findById(id) { return await Hotel.findById(id); }
  async update(id,data) { return await Hotel.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Hotel.findByIdAndDelete(id); }
}
module.exports = new HotelService();
