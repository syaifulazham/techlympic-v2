// src/routes/api/index.json.js
import pool from '$lib/db';

export async function get() {
  const [rows] = await pool.query('SELECT * FROM your_table_name');
  return {
    body: {
      data: rows,
    },
  };
}
