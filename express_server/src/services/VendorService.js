
const Vendor = require('../models/sales/Vendor');
class VendorService {
  async create(data) { return await Vendor.create(data); }
  async findAll() { return await Vendor.find(); }
  async findById(id) { return await Vendor.findById(id); }
  async update(id,data) { return await Vendor.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Vendor.findByIdAndDelete(id); }
}
module.exports = new VendorService();
