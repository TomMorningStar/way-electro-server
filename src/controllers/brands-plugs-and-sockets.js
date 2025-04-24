const pool = require('../db');

exports.getBrandsPlugsAndSocketsByProductId = async (req, res) => {
  const { productId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM "brands-plugs-and-sockets" WHERE product_id = $1',
      [productId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка запроса к базе:', err);
    res.status(500).json({ error: 'Database error', err });
  }
};
