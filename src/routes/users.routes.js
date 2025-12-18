const router = require("express").Router();
const c = require("../controllers/users.controller");

router.get("/", c.getAll);
router.get("/:id", c.getOne);
router.post("/", c.create);
router.put("/:id", c.update);
router.delete("/:id", c.delete);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Bütün istifadəçiləri gətir
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: İstifadəçilərin siyahısı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Yusif
 *                   email:
 *                     type: string
 *                     example: yusif@gmail.com
 *                   role:
 *                     type: string
 *                     example: Student
 */
router.get("/", (req, res) => {});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: ID-yə görə istifadəçi gətir
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tapılan istifadəçi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 name:
 *                   type: string
 *                   example: Emiliya
 *                 email:
 *                   type: string
 *                   example: emiliya@gmail.com
 *                 role:
 *                   type: string
 *                   example: Instructor
 */
router.get("/:id", (req, res) => {});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Yeni istifadəçi yarat
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ali
 *               email:
 *                 type: string
 *                 example: ali@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *               role:
 *                 type: string
 *                 example: Student
 *     responses:
 *       201:
 *         description: İstifadəçi yaradıldı
 */
router.post("/", (req, res) => {});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: İstifadəçi məlumatlarını yenilə
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Kamran
 *               role:
 *                 type: string
 *                 example: Admin
 *     responses:
 *       200:
 *         description: İstifadəçi yeniləndi
 */
router.put("/:id", (req, res) => {});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: İstifadəçini sil
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: İstifadəçi silindi
 */
router.delete("/:id", (req, res) => {});

module.exports = router;
