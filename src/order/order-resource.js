const OrderStatus = {
  created: "Created",
  accepted: "Accepted",
  driverAssigned: "DriverAssigned",
  delivering: "Delivering",
  done: "Done",
  canceled: "Canceled",
};

const PaymentMethod = ["Momo", "Cash", "VN Pay", "QR Pay"];

module.exports = {
  OrderStatus,
  PaymentMethod,
};
