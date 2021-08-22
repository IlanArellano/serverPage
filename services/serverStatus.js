import axios from "axios";

export default async function serverStatus() {
  try {
    const res = await axios.get(`/api/serverstatus`);
    return res.data;
  } catch (error) {
    return { error };
  }
}
