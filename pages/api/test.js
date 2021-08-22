import { getConnection } from "../../db";

export default async function test(req, res) {
  try {
    const pool = await getConnection();
    const query = await pool.request().query("SELECT * FROM rangos");

    res.status(200).json(query);
  } catch (error) {
    console.error(error);
  }
}
