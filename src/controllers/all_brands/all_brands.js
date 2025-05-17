const pool = require('../../db');

exports.get_all_brands = async (req, res) => {

  try {
    const result = await pool.query(
      `SELECT *
       FROM get_all_brands`
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};