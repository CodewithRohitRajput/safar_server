
const Itinerary = require('../models/website/Itinerary');
class ItineraryService {
  async create(data) { return await Itinerary.create(data); }
  async findAll() { return await Itinerary.find({ delete: false }); }
  async findById(id) { return await Itinerary.findOne({ _id: id, delete: false }); }
  async update(id,data) { return await Itinerary.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Itinerary.findByIdAndUpdate(id, { delete: true }, { new: true }); }
  async findByPagination(page, limit) {
    const skip = (page - 1) * limit;
    const data = await Itinerary.find({ delete: false }).skip(skip).limit(limit);
    const total = await Itinerary.countDocuments({ delete: false });
    return {
      data,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalRecords: total
    };
  }
}
module.exports = new ItineraryService();
