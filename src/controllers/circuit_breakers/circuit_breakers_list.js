const pool = require('../../db');

exports.get_circuit_breakers_list = async (req, res) => {
	const { id } = req.params;
	// console.log('Received params:', req.params);

	try {
		// const result = await pool.query(
		//   `SELECT *
		//    FROM circuit_breakers_list
		//    WHERE circuit_breakers_list.type_id = $1
		//    AND circuit_breakers_list.brand_id = $2`,
		//   [type_id, brand_id]
		// );
		const result = await pool.query(
			`SELECT *
				FROM 
						circuit_breakers_list
				WHERE 
    circuit_breakers_list.catalog_list_id = $1`,
			[id]
		);

		res.json(result.rows);
	} catch (err) {
		console.error('Ошибка запроса к базе:', err);
		res.status(500).json({ error: 'Database error', details: err.message });
	}
};
