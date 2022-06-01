const express = require("express");
const router = express.Router();
const {
  validateCreate,
  validateUpdate,
} = require("../middlewares/invoiceValidation");
const {
  createInvoice,
  getInvoices,
  getInvoice,
  updateInvoice,
  deleteInvoice,
} = require("../controllers/invoiceControllers");

router.post("/", validateCreate, createInvoice);
router.get("/", getInvoices);
router.get("/:invoiceId", getInvoice);
router.put("/:invoiceNo", validateUpdate, updateInvoice);
router.delete("/:invoiceId", deleteInvoice);

module.exports = router;
