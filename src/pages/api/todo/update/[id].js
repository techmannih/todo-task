import dbConnect from "../../../../config/db";
import { updateTodoById } from "../../../../controller/todoController";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "PUT") {
    try {
      await updateTodoById(req, res);
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
