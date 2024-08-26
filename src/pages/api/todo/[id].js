// api/todo/[id].js
import dbConnect from "../../../config/db";
import { getTodoById } from "../../../controller/todoController";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  await dbConnect();

  if (method === "GET") {
    try {
      await getTodoById(id, res);
    } catch (error) {
      console.error("Error fetching todo:", error);
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
