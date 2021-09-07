import sql, { getConnection } from "../../db/";
import { encryptPassword } from "../../utils/form/encryptPassword";

export default async function handleRegister(req, res) {
  if (req.method != "POST")
    return res
      .status(500)
      .json({ error: `Method ${req.method} is not allowed.` });
  try {
    const { email, username, password } = req.body;
    console.log(req.body);
    const pool = await getConnection();

    const Exist =
      await pool.query`SELECT * FROM usuarios WHERE usuario = ${username} OR correo = ${email}`;
    if (Exist.recordset.length > 0) {
      const findUser = Exist.recordset.find((c) => c.usuario === username);
      const findEmail = Exist.recordset.find((c) => c.correo === email);

      return res.status(201).json({
        userExist: findUser ? true : false,
        emailExist: findEmail ? true : false,
      });
    }

    let newPassword = await encryptPassword(password);

    if (!newPassword) {
      newPassword = password;
    }

    const query =
      await pool.query`INSERT INTO usuarios (correo, usuario, contraseña) VALUES (${email}, ${username}, ${newPassword})`;

    res.status(201).json({ query: query });
  } catch (error) {
    res.status(500).json({ error });
  }
}
