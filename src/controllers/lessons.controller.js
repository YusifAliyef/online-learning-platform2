const db = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await db.query("SELECT * FORM lessons ");
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await db.query("SELECT *FORM lesosns WHERE id=?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { course_id, title, content } = req.body;
  await db.query(
    "INSERT INTO lessons(course_id, title, content) VALUES (?,?,?)",
    [course_id, title, content]
  );
  res.json({ message: "Lesson created" });
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  await db.query("UPDATE lessons SET title=?, content=? WHERE id=?", [
    title,
    content,
    req.params.id,
  ]);
  res.json({ message: "Lesson Updated" });
};

exports.delete = async (req, res) => {
  await db.query("DELETE FROM lessons WHERE id=?", [req.params.id]);
  res.json({ message: "Lesson deleted" });
};
