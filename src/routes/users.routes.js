const router = require("express").Router();
const c = require("../controllers/users.controller");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

module.exports = router;
