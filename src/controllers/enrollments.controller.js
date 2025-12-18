const db = require("../config/db");


exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT e.id, u.name AS user, c.title AS course
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      JOIN courses c ON e.course_id = c.id
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM enrollments WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Enrollment not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.create = async (req, res) => {
  try {
    const { user_id, course_id } = req.body || {};


    if (!user_id || !course_id) {
      return res
        .status(400)
        .json({ message: "user_id və course_id tələb olunur" });
    }

    await db.query(
      "INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)",
      [user_id, course_id]
    );

    res.status(201).json({ message: "Enrollment created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.delete = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM enrollments WHERE id=?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Enrollment not found" });

    res.json({ message: "Enrollment deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
