// models/Book.js

const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({
  paymentDue: {
    type: "Date",
  },
  invoiceDate: {
    type: "Date",
  },
  description: {
    type: "String",
  },
  paymentTerms: {
    type: "Number",
  },
  clientName: {
    type: "String",
  },
  clientEmail: {
    type: "String",
  },
  status: {
    type: "String",
  },
  streetAddress: {
    type: "String",
  },
  city: {
    type: "String",
  },
  postCode: {
    type: "String",
  },
  country: {
    type: "String",
  },
  clientStreetAddress: {
    type: "String",
  },
  clientCity: {
    type: "String",
  },
  clientPostCode: {
    type: "String",
  },
  clientCountry: {
    type: "String",
  },
  invoices: {
    type: ["Mixed"],
  },
  total: {
    type: "Number",
  },
  creator: {
    type: "String",
  },
});

InvoiceSchema.set("timestamps", true);

module.exports = Invoice = mongoose.model("invoice", InvoiceSchema);
