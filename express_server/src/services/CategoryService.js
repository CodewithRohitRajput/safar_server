
const Category = require('../models/website/Category');
class CategoryService {
  async create(data) { return await Category.create(data); }
  async findAll() { return await Category.find({ delete: false }); }
  async findById(id) { return await Category.findOne({ _id: id, delete: false }); }
  async update(id,data) { return await Category.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Category.findByIdAndUpdate(id, { delete: true }, { new: true }); }
  async findByPagination(page, limit) {
    const skip = (page - 1) * limit;
    const data = await Category.find({ delete: false }).skip(skip).limit(limit);
    const total = await Category.countDocuments({ delete: false });
    return {
      data,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalRecords: total
    };
  }
}
module.exports = new CategoryService();
