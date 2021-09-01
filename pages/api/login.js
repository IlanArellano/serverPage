import bcrypt from "bcrypt";
import sql, { getConnection } from "../../db";

const saltRounds = 10;

const encryptPassword = bcrypt.genSalt(saltRounds, (err, salt) => {
  return {
    err,
    salt,
  };
});

export default async function login(req, res) {
  if (req.method !== "POST")
    return res
      .status(500)
      .json({ error: `HTTP method: ${req.method} no allowed` });

  try {
    const pool = await getConnection();
    const { user, password } = req.body;
    if (!user || !password)
      return res.status(400).json({ error: "Bad Request" });

    const searchUser = await pool
      .request()
      .input("user", sql.VarChar(50), user)
      .query("SELECT * FROM usuario WHERE usuario = @user");

    if (!searchUser.recordset.length) {
      return res.status(404).json({ error: "usuario invalido" });
    }

    const validatePassword = searchUser.recordset.find(
      (el) => el.contraseña === password
    );

    if (validatePassword === undefined)
      return res.status(404).json({ error: "Contraseña invalida" });

    res.status(201).json({ finalUser: validatePassword });
  } catch (error) {
    res.status(404).json({ error: "Usuario o contraseña invalidas" });
  }
}
