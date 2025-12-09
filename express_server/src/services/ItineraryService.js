
const Itinerary = require('../models/website/Itinerary');
class ItineraryService {
  async create(data) { return await Itinerary.create(data); }
  async findAll() { return await Itinerary.find(); }
  async findById(id) { return await Itinerary.findById(id); }
  async update(id,data) { return await Itinerary.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Itinerary.findByIdAndDelete(id); }
}
module.exports = new ItineraryService();
