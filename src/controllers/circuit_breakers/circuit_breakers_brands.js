const pool = require('../../db');

exports.get_circuit_breakers_brands = async (req, res) => {
  const { catalog_id } = req.params;
  console.log(req.params);
  
  try {
    const result = await pool.query(
      `SELECT circuit_breakers_brands.*
       FROM circuit_breakers_brands
       WHERE circuit_breakers_brands.catalog_item_id = $1`,
      [catalog_id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
};