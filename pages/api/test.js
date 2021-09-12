import { getConnection } from "../../db";

export default async function test(req, res) {
  try {
    const pool = await getConnection();
    const query = await pool.query`EXEC dbo.ADD_USER_REGISTER '', 'sad', 'sad'`;

    res.status(200).json(query);
  } catch (error) {
    res.json({ error: `Ha ocurrido un error: ${JSON.stringify(error)}` });
  }
}
