const express = require("express");
const { dataResource } = require("./data-resource");
const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const data = dataResource.find(
    (i) => i.username === username && i.password === password
  );
  if (!username || !password || !data) {
    res.status(400).json({ data: null });
  } else {
    const user = { ...data };
    delete user.password;
    res.status(200).json({ data: user });
  }
});

router.get("/users", (req, res) => res.status(200).json(dataResource));

module.exports = router;
