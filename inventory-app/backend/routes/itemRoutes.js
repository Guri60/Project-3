const router = require("express").Router();
const Item = require("../models/Item");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, async (req, res) => {
  const items = await Item.find({ user: req.user.id });
  res.json(items);
});

router.post("/", auth, async (req, res) => {
  const item = await Item.create({ ...req.body, user: req.user.id });
  res.json(item);
});

router.put("/:id", auth, async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedItem);
});

router.delete("/:id", auth, async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;