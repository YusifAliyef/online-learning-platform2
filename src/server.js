const app = require("./app");
const pool = require("./config/db"); // <- doğru yol
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ MySQL uğurla qoşuldu!");
    connection.release();
  } catch (err) {
    console.error("❌ MySQL bağlantısı xətası:", err);
  }
  console.log(`Server running on port ${PORT}`);
});
