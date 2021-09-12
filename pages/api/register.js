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

    let newPassword = await encryptPassword(password);

    if (!newPassword) {
      newPassword = password;
    }

    const registerUser =
      await pool.query`EXEC dbo.ADD_USER_REGISTER ${email}, ${username}, ${newPassword}`;
    //Si el usuario existe
    if (registerUser.recordset && registerUser.recordset.length > 0) {
      const findUser = registerUser.recordset.find(
        (c) => c.usuario === username
      );
      const findEmail = registerUser.recordset.find((c) => c.correo === email);

      return res.status(201).json({
        userExist: findUser ? true : false,
        emailExist: findEmail ? true : false,
      });
    }
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
}
