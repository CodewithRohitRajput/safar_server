
const Location = require('../models/website/Location');
class LocationService {
  async create(data) { return await Location.create(data); }
  async findAll() { return await Location.find({ delete: false }); }
  async findById(id) { return await Location.findOne({ _id: id, delete: false }); }
  async update(id,data) { return await Location.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Location.findByIdAndUpdate(id, { delete: true }, { new: true }); }
  async findByPagination(page, limit) {
    const skip = (page - 1) * limit;
    const data = await Location.find({ delete: false }).skip(skip).limit(limit);
    const total = await Location.countDocuments({ delete: false });
    return {
      data,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalRecords: total
    };
  }
}
module.exports = new LocationService();
