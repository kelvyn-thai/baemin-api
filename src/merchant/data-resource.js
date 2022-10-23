const env = require("../configs/env");

const dataResource = {
  kfc: {
    items: [
      {
        id: "hamburger",
        name: "Hamburger",
        price: 20000,
        merchantId: "kfc",
        categoryId: "fast-food",
        imgURL: `${env.EXPRESS_APP_URL}/images/hamburger.webp`,
        extraItem: {
          "extra-food": {
            id: "extra-food",
            name: "Món thêm",
            isRequired: false,
            items: [
              {
                id: "egg",
                name: "Trứng ốp la",
                price: 5000,
              },
              {
                id: "vegetables",
                name: "Rau thêm",
                price: 10000,
              },
            ],
          },
          "extra-drinks": {
            id: "extra-drinks",
            name: "Nước uống",
            isRequired: false,
            items: [
              {
                id: "cocacola",
                name: "Cocacola",
                price: 10000,
              },
              {
                id: "7up",
                name: "Seven up",
                price: 15000,
              },
            ],
          },
        },
      },
      {
        id: "sandwich",
        name: "Bánh mì Sandwich",
        price: 30000,
        merchantId: "kfc",
        categoryId: "fast-food",
        imgURL: `${env.EXPRESS_APP_URL}/images/sandwich.webp`,
        extraItem: {
          "extra-food": {
            id: "extra-food",
            name: "Món thêm",
            isRequired: false,
            items: [
              {
                id: "cheese",
                name: "Phô mai",
                price: 5000,
              },
              {
                id: "banana",
                name: "Chuối",
                price: 9000,
              },
            ],
          },
        },
      },
    ],
    name: "Gà rán KFC",
    address: "27 Phạm Hùng P4 Q8 TP HCM",
    id: "kfc",
  },
  "phuc-long": {
    items: [
      {
        id: "coffee",
        name: "Cà phê đá",
        price: 30000,
        merchantId: "phuc-long",
        categoryId: "drinks",
        imgURL: `${env.EXPRESS_APP_URL}/images/coffee.webp`,
        extraItem: {
          sizes: {
            id: "sizes",
            name: "Kích cỡ",
            isRequired: true,
            items: [
              {
                id: "S",
                name: "S",
                price: 0,
              },
              {
                id: "M",
                name: "M",
                price: 8000,
              },
              {
                id: "L",
                name: "L",
                price: 12000,
              },
            ],
          },
          "sugar-level": {
            id: "sugar-level",
            name: "Độ ngọt",
            isRequired: true,
            items: [
              {
                id: "0%",
                name: "Không đường",
                price: 0,
              },
              {
                id: "50%",
                name: "Ít đường",
                price: 0,
              },
              {
                id: "100%",
                name: "Bình thường",
                price: 0,
              },
            ],
          },
        },
      },
      {
        id: "milk-coffee",
        name: "Cà phê sữa đá",
        price: 35000,
        merchantId: "phuc-long",
        categoryId: "drinks",
        imgURL: `${env.EXPRESS_APP_URL}/images/milk-coffee.webp`,
        extraItem: {
          sizes: {
            id: "sizes",
            name: "Kích cỡ",
            isRequired: true,
            items: [
              {
                id: "S",
                name: "S",
                price: 0,
              },
              {
                id: "M",
                name: "M",
                price: 8000,
              },
              {
                id: "L",
                name: "L",
                price: 12000,
              },
            ],
          },
          "sugar-level": {
            id: "sugar-level",
            name: "Độ ngọt",
            isRequired: true,
            items: [
              {
                id: "0%",
                name: "Không đường",
                price: 0,
              },
              {
                id: "50%",
                name: "Ít đường",
                price: 0,
              },
              {
                id: "100%",
                name: "Bình thường",
                price: 0,
              },
            ],
          },
        },
      },
    ],
    name: "Phuc Long Coffee & Tea Express",
    address: "42 Trần Cao Vân, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
    id: "phuc-long",
  },
};

module.exports = dataResource;
