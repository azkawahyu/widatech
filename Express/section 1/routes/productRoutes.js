const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const {
  validatePost,
  validatePut,
} = require("../middlewares/productValidation");
const router = express.Router();

router.post("/", validatePost, createProduct);
router.get("/", getProducts);
router.get("/:productId", getProduct);
router.put("/:productId", validatePut, updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
