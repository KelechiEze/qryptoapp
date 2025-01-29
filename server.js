import express from "express";
import cors from "cors";
import db from "./database.js"; // Import the database connection

const app = express();
app.use(cors());
app.use(express.json());

// API Route to Get Dashboard Data
app.get("/api/dashboard", (req, res) => {
  const query = `
    SELECT 
      (SELECT COUNT(*) FROM transactions WHERE DATE(created_at) = DATE('now')) AS todays_fee,
      (SELECT SUM(amount) FROM transactions) AS total_fee
  `;

  db.get(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// API Route to Add a Transaction
app.post("/api/transactions", (req, res) => {
  const { amount } = req.body;

  const query = `INSERT INTO transactions (amount) VALUES (?)`;
  db.run(query, [amount], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID, amount });
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
