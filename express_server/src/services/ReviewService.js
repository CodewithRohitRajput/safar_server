
const Review = require('../models/website/Review');
class ReviewService {
  async create(data) { return await Review.create(data); }
  async findAll() { return await Review.find(); }
  async findById(id) { return await Review.findById(id); }
  async update(id,data) { return await Review.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Review.findByIdAndDelete(id); }
}
module.exports = new ReviewService();
