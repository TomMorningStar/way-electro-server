const pool = require('../../db');

exports.get_circuit_breakers_types = async (req, res) => {
  const { catalog_id } = req.params;
  
  try {
    const result = await pool.query(
      `SELECT * FROM circuit_breakers_types
      WHERE circuit_breakers_types.catalog_item_id = $1`,
      [catalog_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', err });
  }
};
