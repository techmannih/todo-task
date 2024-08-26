import dbConnect from "../../../../config/db";
import { deleteTodoById } from "../../../../controller/todoController";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await dbConnect();

  if (method === "DELETE") {
    try {
      await deleteTodoById(id, res);
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
