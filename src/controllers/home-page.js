const pool = require('../db');

exports.getAll = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "all-products"');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', err });
  }
};
