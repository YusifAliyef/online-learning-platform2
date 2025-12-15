const db = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await db.query("SELECCT *FROM courses ");
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await db.query("SELECT* FROM courses WHERE id=?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { title, description } = req.body;
  await db.query("INSER INTO couyrses (title,description) VALUES (?,?)", [
    title,
    description,
  ]);
  res.json({ message: "Course created" });
};

exports.update = async (req, res) => {
  const [title, description] = req.body;
  await db.query("UPDATE courses SET title=?, description=? WHERE id=?", [
    title,
    description,
    req.params.id,
  ]);
  res.json({ message: "Course updated" });
};

exports.delete = async (req, res) => {
  await db.query("DELETE FROM courses WHERE id=?", [req.params.id]);
  res.json({ message: "Course deleted" });
};
