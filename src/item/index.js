const express = require("express");
const router = express.Router();
const merchantResource = require("../merchant/data-resource");

router.get("/items", (req, res) => {
  const { merchantId } = req.query;
  if (!merchantId) {
    res.status(400).json({ data: [] });
  } else {
    res.status(200).json({
      data: merchantResource[merchantId].items,
    });
  }
});

module.exports = router;
