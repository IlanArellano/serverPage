import util from "minecraft-server-util";

export default async function handler(req, res) {
  try {
    const response = await util.status(process.env.NEXT_PUBLIC_SERVER_ADDRESS, {
      port: Number(process.env.NEXT_PUBLIC_SERVER_PORT),
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
}
