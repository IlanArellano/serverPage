import sql from "mssql";
import options from "./config";

export const getConnection = async () => {
  try {
    const pool = await sql.connect(options);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export default sql;
