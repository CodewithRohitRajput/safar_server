
const Ledger = require('../models/sales/Ledger');
class LedgerService {
  async create(data) { return await Ledger.create(data); }
  async findAll() { return await Ledger.find(); }
  async findById(id) { return await Ledger.findById(id); }
  async update(id,data) { return await Ledger.findByIdAndUpdate(id,data,{new:true}); }
  async delete(id) { return await Ledger.findByIdAndDelete(id); }
}
module.exports = new LedgerService();
