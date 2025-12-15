const router = require("express").Router();
const c = require("../controllers/enrollments.controller");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.delete("/:id", c.delete);

module.exports = router;
