import dbConnect from "../../../../config/db";
import { getTodoList } from "../../../../controller/todoController";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      await getTodoList(res);
    } catch (error) {
      console.error("Error fetching todo list:", error);
      res.status(500).json({ msg: "Server Error" });
    }
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
