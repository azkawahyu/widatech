const catchError = require("../utils/catchError");
const Invoice = require("../models/").Invoice;

module.exports = {
  createInvoice: async (req, res) => {
    const body = req.body;
    try {
      const invoice = await Invoice.create(body);
      if (!invoice) {
        return res.status(500).json({
          status: "Internal Server Error",
          message: "Failed to save to database",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Successfully create invoice",
        result: invoice,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getInvoices: async (req, res) => {
    try {
      const invoice = await Invoice.findAll({
        limit: 10,
      });

      if (invoice.length == 0) {
        return res.status(404).json({
          status: "Not Found",
          message: "The data you are looking for is not exist yet",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Invoice data successfully retrieved",
        result: invoice,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  getInvoice: async (req, res) => {
    const { invoiceId: id } = req.params;
    try {
      const invoice = await Invoice.findOne({
        where: { id },
      });
      if (!invoice) {
        return res.status(404).json({
          status: "Not Found",
          message: "The data you are looking for is not exist yet",
          result: {},
        });
      }
      res.status(201).json({
        status: "Success",
        message: "Invoice data successfully retrieved",
        result: invoice,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  updateInvoice: async (req, res) => {
    const { invoiceNo } = req.params;
    const body = req.body;
    try {
      const checkUpdate = await Invoice.update(body, {
        where: { invoiceNo },
      });
      if (checkUpdate[0] != 1) {
        return res.status(404).json({
          status: "Not Found",
          message: "Failed to update the data / data not found",
          result: {},
        });
      }
      const invoice = await Invoice.findOne({ where: { invoiceNo } });
      res.status(201).json({
        status: "Success",
        message: "Invoice data successfully updated",
        result: invoice,
      });
    } catch (error) {
      catchError(res, error);
    }
  },
  deleteInvoice: async (req, res) => {
    const { invoiceId: id } = req.params;
    try {
      const invoice = await Invoice.destroy({
        where: { id },
      });
      if (!invoice) {
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
