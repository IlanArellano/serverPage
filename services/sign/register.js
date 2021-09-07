import axios from "axios";

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
