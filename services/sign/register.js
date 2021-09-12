import axios from "axios";

const scopes = ["identify"];

// prettier-ignore
export const getDiscordTokenURL = ({ host, clientID, type = 'code' }) => `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${encodeURIComponent(host)}&response_type=${type}&scope=${encodeURIComponent(scopes.join(' '))}`;

export const getDiscordToken = async (code) => {
  try {
    const keys = {
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: `${process.env.NEXT_PUBLIC_HOST_URL}/register`,
    };
    let formBody = [];
    const tokenURL = "https://discord.com/api/oauth2/token";
    Object.entries(keys).forEach((key) => {
      const encodeKey = encodeURIComponent(key[0]);
      const encodeValue = encodeURIComponent(key[1]);
      formBody.push(`${encodeKey}=${encodeValue}`);
    });
    const formURI = formBody.join("&");
    const response = await axios.post(`${tokenURL}`, formURI, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return { error: true };
  } catch (error) {
    return { error };
  }
};

export default async function register({ email, username, password }) {
  try {
    const res = await axios.post(`api/register`, { email, username, password });
    if (res.status === 201 && res.data) {
      return res.data;
    }
    return null;
  } catch (error) {
    return { error };
  }
}
