const yup = require("yup");

module.exports = {
  validatePost: async (req, res, next) => {
    let schema;
    {
      schema = yup.object({
        itemName: yup.string().min(5).required(),
        quantity: yup.number().min(1).required(),
        totalCost: yup.number().required(),
        totalSold: yup.number().required(),
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
  validatePut: async (req, res, next) => {
    let schema;
    {
      schema = yup.object({
        itemName: yup.string().min(5),
        quantity: yup.number().min(1),
        totalCost: yup.number(),
        totalSold: yup.number(),
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
