
const Review = require('../models/website/Review');
class ReviewService {
  async create(data) { return await Review.create(data); }
  async findAll() { return await Review.find({ delete: false }); }
  async findById(id) { return await Review.findOne({ _id: id, delete: false }); }
  async update(id,data) { return await Review.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Review.findByIdAndUpdate(id, { delete: true }, { new: true }); }
  async findByPagination(page, limit) {
    const skip = (page - 1) * limit;
    const data = await Review.find({ delete: false }).skip(skip).limit(limit);
    const total = await Review.countDocuments({ delete: false });
    return {
      data,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalRecords: total
    };
  }
}
module.exports = new ReviewService();
