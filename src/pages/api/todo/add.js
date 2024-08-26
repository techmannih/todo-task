// api/todo/add.js
import dbConnect from "../../../config/db";
import { addTodo } from "../../../controller/todoController";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      await addTodo(req, res);
    } catch (error) {
      console.error("Error in:", error);
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
