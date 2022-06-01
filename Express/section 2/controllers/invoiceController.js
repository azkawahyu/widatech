const Invoice = require("../models/").Invoice;
const catchError = require("../utils/catchError");
const readExcel = require("read-excel-file");

const upload = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path = __basedir + "/resources/uploads/" + req.file.filename;
    readExcel(path).then((rows) => {
      rows.shift();
      let invoices = [];
      rows.forEach((row) => {
        let invoice = {
          invoiceNo: row[0],
          customer: row[1],
          salesPerson: row[2],
          paymentType: row[3],
          notes: row[4],
        };
        invoices.push(invoice);
      });
      Invoice.bulkCreate(invoices)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    catchError(res, error);
  }
};
const getInvoices = (req, res) => {
  Invoice.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = { upload, getInvoices };
