const express = require("express");
const env = require("../configs/env");
const router = express.Router();
const categoryResources = require("../category/data-resource");

router.get("/merchant", (req, res) => {
  const { categoryId } = req.query;
  if (!categoryId || !categoryResources.hasOwnProperty(categoryId)) {
    res.status(400).json({ data: [] });
  } else {
    res.status(200).json({
      data: categoryResources[categoryId].merchant,
    });
  }
});

router.get("/merchant-list", (req, res) => {
  res.status(200).json({
    data: Object.entries(categoryResources).reduce((prev, curr) => {
      const [_, value] = curr;
      prev.push(...value.merchant);
      return [...prev];
    }, []),
  });
});

module.exports = router;
