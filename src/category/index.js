const express = require("express");
const env = require("../configs/env");
const router = express.Router();

router.get("/category", (req, res) => {
  res.set("Cache-Control", "public, max-age=5");
  res.status(200).json({
    data: [
      {
        id: "fast-food",
        name: "Fast Food",
        imgURL: `${env.EXPRESS_APP_URL}/images/fast-food.webp`,
        merchant: ["kfc"],
      },
      {
        id: "drinks",
        name: "Drinks",
        imgURL: `${env.EXPRESS_APP_URL}/images/drinks.webp`,
        merchant: ["phuc-long"],
      },
    ],
  });
});

module.exports = router;
