const router = require("express").Router();
const c = require("../controllers/lessons.controller");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

/**
 * @swagger
 * /lessons:
 *   get:
 *     summary: Bütün dərsləri gətir
 *     tags: [Lessons]
 *     responses:
 *       200:
 *         description: Dərs siyahısı
 */
router.get("/", c.getAll);

/**
 * @swagger
 * /lessons/{id}:
 *   get:
 *     summary: ID-yə görə dərs gətir
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Dərs məlumatı
 */
router.get("/:id", c.getOne);

/**
 * @swagger
 * /lessons:
 *   post:
 *     summary: Yeni dərs yarat
 *     tags: [Lessons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: integer
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dərs yaradıldı
 */
router.post("/", c.create);

/**
 * @swagger
 * /lessons/{id}:
 *   put:
 *     summary: Dərsi yenilə
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Dərs yeniləndi
 */
router.put("/:id", c.update);

/**
 * @swagger
 * /lessons/{id}:
 *   delete:
 *     summary: Dərsi sil
 *     tags: [Lessons]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Dərs silindi
 */
router.delete("/:id", c.delete);

module.exports = router;
