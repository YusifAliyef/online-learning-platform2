const router = require("express").Router();
const { create } = require("domain");
const c = require("../controllers/courses.controller");
const { getOne } = require("../controllers/users.controller");
const { route } = require("./users.routes");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/id", c.delete);

module.exports = router;
