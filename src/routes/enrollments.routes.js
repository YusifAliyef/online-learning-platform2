const router = require("express").Router();
const c = require("../controllers/enrollments.controller");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.delete("/:id", c.delete);

/**
 * @swagger
 * /enrollments:
 *   get:
 *     summary: Bütün enrollments-ləri gətir
 *     tags: [Enrollments]
 *     responses:
 *       200:
 *         description: Enrollment siyahısı
 */
router.get("/", c.getAll);

/**
 * @swagger
 * /enrollments/{id}:
 *   get:
 *     summary: ID-yə görə enrollment gətir
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Enrollment məlumatı
 */
router.get("/:id", c.getOne);

/**
 * @swagger
 * /enrollments:
 *   post:
 *     summary: User-i kursa yaz
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               course_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Enrollment yaradıldı
 */
router.post("/", c.create);

/**
 * @swagger
 * /enrollments/{id}:
 *   delete:
 *     summary: Enrollment-i sil
 *     tags: [Enrollments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Enrollment silindi
 */
router.delete("/:id", c.delete);

module.exports = router;
