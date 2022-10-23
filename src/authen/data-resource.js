const driverResource = [
  {
    id: "driver",
    username: "driver",
    password: "ilovebaemin",
    role: "driver",
    name: "Driver Baemin",
    address: "1234 Cao Lỗ P4 Q8 TP HCM",
  },
];

const dataResource = [
  {
    id: "user-01",
    username: "user-01",
    password: "ilovebaemin",
    role: "customer",
    name: "User 01",
    address: "1248 Cao Lỗ P4 Q8 TP HCM",
  },
  {
    id: "user-02",
    username: "user-02",
    password: "ilovebaemin",
    role: "customer",
    name: "User 02",
    address: "3979 Phan Xích Long Phú Nhuận TP HCM",
  },
  {
    id: "admin",
    username: "admin",
    password: "ilovebaemin",
    role: "admin",
    name: "Admin Baemin",
    address: "Anonymous address",
  },
  {
    id: "kfc",
    username: "kfc",
    password: "ilovebaemin",
    role: "merchant",
    name: "KFC",
    address: "14 Phạm Ngọc Thạch, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
  },
  {
    id: "phuc-long",
    username: "phuc-long",
    password: "ilovebaemin",
    role: "merchant",
    name: "Phuc Long Coffee & Tea Express",
    address: "42 Trần Cao Vân, Phường 6, Quận 3, Thành phố Hồ Chí Minh",
  },
  ...driverResource,
];

module.exports = {
  dataResource,
  driverResource,
};
