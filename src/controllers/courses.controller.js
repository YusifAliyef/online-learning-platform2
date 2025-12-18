const db = require("../config/db");


exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM courses");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM courses WHERE id=?", [
      req.params.id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Course not found" });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.create = async (req, res) => {
  
  try {
    const { title, description } = req.body || {};


    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title və Description tələb olunur" });
    }

    await db.query("INSERT INTO courses (title, description) VALUES (?, ?)", [
      title,
      description,
    ]);

    res.status(201).json({ message: "Course created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.update = async (req, res) => {
  try {
    const { title, description } = req.body || {};

 
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title və Description tələb olunur" });
    }

    const [result] = await db.query(
      "UPDATE courses SET title=?, description=? WHERE id=?",
      [title, description, req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Course not found" });

    res.json({ message: "Course updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.delete = async (req, res) => {
  try {
    const [result] = await db.query("DELETE FROM courses WHERE id=?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Course not found" });

    res.json({ message: "Course deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
