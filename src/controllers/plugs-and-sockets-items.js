const pool = require('../db');

exports.getPlugsAndSocketsItemsByBrandId = async (req, res) => {
  const { brandId } = req.params;

  console.log(brandId);
  
  try {
    const result = await pool.query(
      'SELECT * FROM "plugs-and-sockets-items" WHERE brand_id = $1',
      [brandId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', err });
  }
};
