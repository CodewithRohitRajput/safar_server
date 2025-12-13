const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, required: true },
  itinerary: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary', required: true },
  itineraryName: String,
  bookingDate: { type: Date, default: Date.now },
  travelDate: { type: Date, required: true },
  numberOfTravelers: { type: Number, required: true, min: 1 },
  totalAmount: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  status: { 
    type: String, 
    enum: ['confirmed', 'pending', 'cancelled', 'completed'], 
    default: 'pending' 
  },
  paymentStatus: { 
    type: String, 
    enum: ['paid', 'pending', 'refunded', 'partial'], 
    default: 'pending' 
  },
  paymentMode: String,
  transactionId: String,
  specialRequests: String,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String,
  },
  travelers: [{
    name: String,
    age: Number,
    gender: String,
    idProof: String,
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted : {type : Boolean , default : false}

});

BookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  if (!this.bookingId) {
    this.bookingId = `BK${Date.now()}`;
  }
  next();
});

module.exports = mongoose.model('Booking', BookingSchema);