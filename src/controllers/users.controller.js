const db = require("../config/db");

exports.getAll = async (req, res) => {
  const [rows] = await db.query("SELECT*FROM users");
  res.json(rows);
};

exports.getOne = async (req, res) => {
  const [rows] = await db.query("SELECT* FROM users WHERE id=?", [
    req.params.id,
  ]);
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const { name, email, role } = req.body;

  await db.query("INSERT INTO users (name,email,role) VALUES (?,?,?)", [
    name,
    email,
    role,
  ]);
  res.json({ message: "User created" });
};

exports.update = async (req, res) => {
  const { name, email, role } = req.body;
  await db.query("UPDATE users SET name=?, email=?, role=? WHERE id=?", [
    name,
    email,
    role,
    req.params.id,
  ]);

  res.json({ message: "User updated" });
};

exports.delete = async (req, res) => {
  await db.query("DELETE FROM users WHERE id=?", [req.params.id]);
  res.json({ message: "User deleted" });
};
