import { getConnection } from "../../db";

export default async function test(req, res) {
  try {
    res.status(201).json({
      server: process.env.DB_SERVER,
      usuario: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
