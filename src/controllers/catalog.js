const pool = require('../db');

exports.getCatalog = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM catalog_list');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:',  err );
    res.status(500).json({ error: 'Database error', err });
  }
};
