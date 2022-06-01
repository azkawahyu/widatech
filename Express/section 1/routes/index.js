const express = require("express");
const router = express.Router();
const invoiceRoute = require("./invoiceRoutes");
const productRoute = require("./productRoutes");

router.use("/invoice", invoiceRoute);
router.use("/product", productRoute);

module.exports = router;
