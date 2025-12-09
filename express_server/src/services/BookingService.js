
const Booking = require('../models/website/Booking');
class BookingService {
  async create(data) { return await Booking.create(data); }
  async findAll() { return await Booking.find(); }
  async findById(id) { return await Booking.findById(id); }
  async update(id,data) { return await Booking.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Booking.findByIdAndDelete(id); }
}
module.exports = new BookingService();
