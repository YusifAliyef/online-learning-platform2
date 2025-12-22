const router = require("express").Router();
const { create } = require("domain");
const c = require("../controllers/courses.controller");
const { getOne } = require("../controllers/users.controller");
const { route } = require("./users.routes");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Bütün kursları gətir
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Kurs siyahısı
 */
router.get("/", c.getAll);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: ID-yə görə kurs gətir
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Kurs məlumatı
 */
router.get("/:id", c.getOne);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Yeni kurs yarat
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Kurs yaradıldı
 */
router.post("/", c.create);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Kursu yenilə
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Kurs yeniləndi
 */
router.put("/:id", c.update);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Kursu sil
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Kurs silindi
 */
router.delete("/:id", c.delete);

module.exports = router;
