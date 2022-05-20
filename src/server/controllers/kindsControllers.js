const Kind = require("../../database/models/Kinds");

const getKinds = async (req, res, next) => {
  const kinds = await Kind.find();

  if (kinds) {
    res.status(200).json({ kinds });
  } else {
    const err = new Error();
    err.code = 409;
    err.message = "Request error";

    next(err);
  }
};

const getKind = async (req, res, next) => {
  const { id } = req.params;
};

module.exports = { getKinds };
