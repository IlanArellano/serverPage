import axios from "axios";

export default async function loginService({ user, password }) {
  try {
    const res = await axios.post(`/api/login`, { user, password });
    if (res.status >= 401 || !res.data || res.data.error)
      return { error: true };

    return res.data;
  } catch (error) {
    return { error };
  }
}
