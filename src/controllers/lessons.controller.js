const db = require("../config/db");


exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM lessons");
    res.json(rows);
  } catch (err) {
     next(err);
  }
};


exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM lessons WHERE id=?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Lesson not found" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res) => {
  try {
    const { course_id, title, content } = req.body || {};

 
    if (!course_id || !title || !content) {
      return res.status(400).json({ message: "course_id, title və content tələb olunur" });
    }

    await db.query(
      "INSERT INTO lessons (course_id, title, content) VALUES (?, ?, ?)",
      [course_id, title, content]
    );

    res.status(201).json({ message: "Lesson created" });
  } catch (err) {
     next(err);
  }
};


exports.update = async (req, res) => {
  try {
    const { title, content } = req.body || {};

  
    if (!title || !content) {
      return res.status(400).json({ message: "title və content tələb olunur" });
    }

    const [result] = await db.query(
      "UPDATE lessons SET title=?, content=? WHERE id=?",
      [title, content, req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Lesson not found" });

    res.json({ message: "Lesson updated" });
  } catch (err) {
     next(err);
  }
};


exports.delete = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM lessons WHERE id=?", [req.params.id]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Lesson not found" });

    res.json({ message: "Lesson deleted" });
  } catch (err) {
    next(err);
  }
};
