
const Booking = require('../models/website/Booking');
class BookingService {
  async create(data) { return await Booking.create(data); }
  async findAll() { return await Booking.find({ delete: false }); }
  async findById(id) { return await Booking.findOne({ _id: id, delete: false }); }
  async update(id,data) { return await Booking.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Booking.findByIdAndUpdate(id, { delete: true }, { new: true }); }

  async findByPagination(page , limit){
    const skip = (page - 1) * limit;
    const data = await Booking.find({ delete: false }).skip(skip).limit(limit);
    const total = await Booking.countDocuments({ delete: false });
    return{
      data,
      page,
      limit,
      totalPages : Math.ceil(total/limit),
      totalRecords : total
    }
  }


}


module.exports = new BookingService();
