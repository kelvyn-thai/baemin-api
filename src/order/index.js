const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const { OrderStatus, PaymentMethod } = require("./order-resource");
const merchantResource = require("../merchant/data-resource");
const {
  dataResource: authenResource,
  driverResource,
} = require("../authen/data-resource");
const { randomElementInArray } = require("./order.utils");

router.put("/order", (req, res) => {
  const cart = req.body;
  if (!cart) {
    res.status(400).json({ data: {} });
  } else {
    const { items: shoppingItems, merchantId, categoryId, userId } = cart;
    const { name: merchantName, address: merchantAddress } =
      merchantResource[merchantId];
    const { name: customerName, address: customerAddress } =
      authenResource.find((i) => i.id === userId);
    const driver = randomElementInArray(driverResource);
    const order = {
      id: uuidv4(),
      orderName: `Đơn hàng từ ${merchantName}`,
      status: OrderStatus.created,
      categoryId,

      merchantId,
      merchantName,
      merchantAddress,

      totalPrice: shoppingItems.reduce(
        (prev, curr) => prev + curr.totalPrice,
        0
      ),
      totalSubItem: shoppingItems.reduce(
        (prev, curr) => prev + curr.extraItem.length,
        0
      ),
      dishes: shoppingItems,
      createdTime: new Date(new Date().toUTCString()),
      updatedTime: new Date(new Date().toUTCString()),

      paymentMethod: randomElementInArray(PaymentMethod),

      customerAddress,
      customerName,
      userId,

      riderName: driver.name,
      riderId: driver.id,
    };
    res.status(200).json({
      data: order,
    });
  }
});

router.get("/order/status-list", (req, res) =>
  res.status(200).json({
    data: OrderStatus,
  })
);

module.exports = router;
