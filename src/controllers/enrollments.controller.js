const db = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await db.query(`
    SELECT e.id, u.name AS user, c.title AS course
    FROM enrollments e
    JOIN users u ON e.user_id = u.id
    JOIN courses c ON e.course_id = c.id
  `);
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM enrollments WHERE id=?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { user_id, course_id } = req.body;
  await db.query("INSERT INTO enrollments (user_id,course_id) VALUES (?,?)", [
    user_id,
    course_id,
  ]);
  res.json({ message: "Enrollment created" });
};

exports.delete = async (req, res) => {
  await db.query("DELETE FROM enrollments WHERE id=?", [req.params.id]);
  res.json({ message: "Enrollment deleted" });
};
