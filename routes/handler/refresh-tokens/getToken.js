const { RefreshToken } = require("../../../models");

module.exports = async (req, res) => {
  const refreshToken = req.query.refresh_token;
  const token = await RefreshToken.findOne({
    where: { token: refreshToken },
  });

  // if token is not found
  if (!token) {
    return res.status(400).json({
      status: "error",
      message: "invalid token",
    });
  }

  // if token is found
  return res.json({
    status: "success",
    token
  });
};