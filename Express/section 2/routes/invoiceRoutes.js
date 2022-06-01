const express = require("express");
const { upload, getInvoices } = require("../controllers/invoiceController");
const uploadMulter = require("../middlewares/uploadMulter");
const router = express.Router();

router.post("/upload", uploadMulter.single("file"), upload);
router.get("/", getInvoices);

module.exports = router;
