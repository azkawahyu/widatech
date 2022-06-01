const yup = require("yup");

module.exports = {
  validateCreate: async (req, res, next) => {
    let schema;
    {
      schema = yup.object({
        invoiceNo: yup.number().min(1).required(),
        date: yup.date().required(),
        customerName: yup.string().min(2).required(),
        salesPersonName: yup.string().min(2).required(),
        paymentType: yup.mixed().oneOf(["CASH", "CREDIT"]),
        notes: yup.string().min(5).required(),
        listOfProductSold: yup.string().required(),
      });
    }

    const body = req.body;
    const { error } = await schema.validate(body);
    if (error) {
      return res.status(400).json({
        status: "Bad Request",
        message: error.message,
        result: {},
      });
    }
    next();
  },
  validateUpdate: async (req, res, next) => {
    let schema;
    {
      schema = yup.object({
        invoiceNo: yup.number().min(1),
        date: yup.date(),
        customerName: yup.string().min(2),
        salesPersonName: yup.string().min(2),
        paymentType: yup.mixed().oneOf(["CASH", "CREDIT"]),
        notes: yup.string().min(5),
        listOfProductSold: yup.string(),
      });
    }
    const body = req.body;
    const { error } = await schema.validate(body);
    if (error) {
      return res.status(400).json({
        status: "Bad Request",
        message: error.message,
        result: {},
      });
    }
    next();
  },
};
