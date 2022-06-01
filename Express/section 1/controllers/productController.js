const catchError = require("../utils/catchError");
const Product = require("../models").Product;

module.exports = {
  createProduct: async (req, res) => {
    const body = req.body;
    try {
      const product = await Product.create(body);
      if (!product) {
        return res.status(500).json({
          status: "Internal Server Error",
          message: "Failed to save to database",
          result: {},
        });
      }
      return res.status(201).json({
        status: "Success",
        message: "Successfully create product",
        result: product,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getProducts: async (req, res) => {
    try {
      const product = await Product.findAll({
        limit: 10,
      });
      if (product.length == 0) {
        return res.status(404).json({
          status: "Not Found",
          message: "The data you are looking for is not exist yet",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "product data successfully retrieved",
        result: product,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getProduct: async (req, res) => {
    const { productId: id } = req.params;
    try {
      const product = await Product.findOne({
        where: { id },
      });
      if (!product) {
        return res.status(404).json({
          status: "Not Found",
          message: "The data you are looking for is not exist yet",
          result: {},
        });
      }
      const profit = product.totalSold - product.totalCost;
      res.status(201).json({
        status: "Success",
        message: "product data successfully retrieved",
        result: product,
        profit: profit,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateProduct: async (req, res) => {
    const { productId: id } = req.params;
    const body = req.body;
    try {
      const checkUpdate = await Product.update(body, {
        where: { id },
      });
      if (checkUpdate[0] != 1) {
        return res.status(404).json({
          status: "Not Found",
          message: "Failed to update the data / data not found",
          result: {},
        });
      }

      const product = await Product.findOne({ where: { id } });
      res.status(201).json({
        status: "Success",
        message: "Invoice data successfully updated",
        result: product,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteProduct: async (req, res) => {
    const { productId: id } = req.params;
    try {
      const product = await Product.destroy({
        where: { id },
      });
      if (!product) {
        return res.status(404).json({
          status: "Data Not Found",
          message: "The data that you want to delete is not exist",
          result: {},
        });
      }
      res.status(200).json({
        status: "success",
        message: "Successfuly delete data",
        result: {},
      });
    } catch (error) {
      catchError(res, error);
    }
  },
};
