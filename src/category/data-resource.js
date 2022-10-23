const env = require("../configs/env");

const dataResource = {
  "fast-food": {
    merchant: [
      {
        id: "kfc",
        name: "KFC",
        address: "14 Phạm Ngọc Thạch, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
        phone: "1900 6886",
        categoryId: "fast-food",
        imgURL: `${env.EXPRESS_APP_URL}/images/kfc.webp`,
        description: "Gà rán KFC, hambuger ngon, pepsi",
        distance: "0.5km",
        stars: 4.7,
        reviews: "999+",
      },
    ],
  },
  drinks: {
    merchant: [
      {
        id: "phuc-long",
        name: "Phuc Long Coffee & Tea Express",
        address: "42 Trần Cao Vân, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
        phone: "028 3939 7777",
        categoryId: "drinks",
        imgURL: `${env.EXPRESS_APP_URL}/images/phuc-long.webp`,
        description: "Trà sữa Phúc Long, Hồng Trà đác cam",
        distance: "1.5km",
        stars: 4.8,
        reviews: "9999+",
      },
    ],
  },
};

module.exports = dataResource;
