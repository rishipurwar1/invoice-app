const express = require("express");

const {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  paidInvoice,
} = require("../controllers/invoices");

const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", getInvoices);
router.post("/", auth, createInvoice);
router.patch("/:id", auth, updateInvoice);
router.delete("/:id", auth, deleteInvoice);
router.patch("/:id/paid", auth, paidInvoice);

module.exports = router;
