import axios from "axios";

export default async function handler(req, res) {
  const keys = {
    client_id: "871199229715054603",
    client_secret: "TdIDY6Yvyck1Qzi3n95rmh-mbvFgdzBS",
    grand_type: "autorization_code",
    code: "2iIaiKvsI5rGYwsvgrn4fQsTMqGeFc",
    redirect_uri: "http://localhost:3000",
  };
  let formBody = [];
  const tokenURL = "https://discord.com/api/oauth2/token";
  Object.entries(keys).forEach((key) => {
    const encodeKey = encodeURIComponent(key[0]);
    const encodeValue = encodeURIComponent(key[1]);
    formBody.push(`${encodeKey}=${encodeValue}`);
  });
  if (req.method === "POST") {
    const formURI = formBody.join("&");
    const response = await axios.post(`${tokenURL}`, formURI, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    res.json(response);
  }
}
