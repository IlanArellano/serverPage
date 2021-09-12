import axios from "axios";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET")
      return res
        .status(401)
        .json({ error: `HTTP method ${req.method} is not allowed` });
    const { code } = req.query;
    if (!code) {
      return res.status(404).json({ error: true });
    }
    res.status(201).json(response);
  } catch (error) {
    if (error.message && error.message.endsWith("400")) {
      return res.status(400).json({ error });
    }
    res.status(500).json({ error });
  }
}
