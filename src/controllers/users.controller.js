const bcrypt = require("bcrypt");
const db = require("../config/db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, email, role, password } = req.body || {};
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!name || !email) {
      return res.status(400).json({ message: "Name və Email tələb olunur" });
    }

    const userRole = role || "Student";

    await db.query("INSERT INTO users (name, email, role, password) VALUES (?, ?, ?,?)", [
      name,
      email,
      userRole,
      hashedPassword,
    ]);

    res.status(201).json({ message: "User created" });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res) => {
  try {
    const { name, email, role } = req.body || {};

    if (!name || !email) {
      return res.status(400).json({ message: "Name və Email tələb olunur" });
    }

    const userRole = role || "Student";

    const [result] = await db.query(
      "UPDATE users SET name=?, email=?, role=? WHERE id=?",
      [name, email, userRole, req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated" });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM users WHERE id=?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
  } catch (err) {
    next(err);
  }
};
