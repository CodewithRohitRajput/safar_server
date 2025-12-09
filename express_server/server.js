require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('./src/middleware/logger');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// All routes
app.use('/api/index', require('./src/routes/indexRoutes'));
app.use('/api/customizelead', require('./src/routes/CustomizeLeadRoutes'));
app.use('/api/lead', require('./src/routes/LeadRoutes'));
app.use('/api/activity', require('./src/routes/ActivityRoutes'));
app.use('/api/coordinator', require('./src/routes/CoordinatorRoutes'));
app.use('/api/hotel', require('./src/routes/HotelRoutes'));
app.use('/api/localsupport', require('./src/routes/LocalSupportRoutes'));
app.use('/api/transport', require('./src/routes/TransportRoutes'));
app.use('/api/invoice', require('./src/routes/InvoiceRoutes'));
app.use('/api/ledger', require('./src/routes/LedgerRoutes'));
app.use('/api/payment', require('./src/routes/PaymentRoutes'));
app.use('/api/vendor', require('./src/routes/VendorRoutes'));
app.use('/api/booking', require('./src/routes/BookingRoutes'));
app.use('/api/category', require('./src/routes/CategoryRoutes'));
app.use('/api/content', require('./src/routes/ContentRoutes'));
app.use('/api/itinerary', require('./src/routes/ItineraryRoutes'));
app.use('/api/location', require('./src/routes/LocationRoutes'));
app.use('/api/review', require('./src/routes/ReviewRoutes'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("✅ DB Connected"))
.catch(err => console.error("❌ DB Error:", err));

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
