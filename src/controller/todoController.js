import Todo from "../models/todoModel";

// Add a new todo
export async function addTodo(req, res) {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Title and description are required" });
    }

    const d = new Date();
    const formattedDate = d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const newTodo = new Todo({
      title,
      description,
      date: formattedDate, // Set the formatted date when creating the todo
    });

    await newTodo.save();
    console.log("newTodo", newTodo);

    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Update a todo by ID
export async function updateTodoById(req, res) {
  const { id } = req.query;
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ msg: "Title and description are required" });
  }

  const d = new Date();
  const formattedDate = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title,
        description,
        date: formattedDate,
      },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Get a todo by ID
export async function getTodoById(id, res) {
  try {
    const todo = await Todo.findById(id);
    console.log("todo", todo);

    if (!todo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.status(200).json(todo);
    console.log("todo", todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Get all todos
export async function getTodoList(res) {
  try {
    const todos = await Todo.find();
    console.log("todos", todos);
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching todo list:", error);
    res.status(500).json({ msg: "Server Error" });
  }
}

// Delete a todo by ID
export async function deleteTodoById(id, res) {
  try {
    const result = await Todo.findByIdAndDelete(id);
    console.log("result", result);
    if (!result) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.status(200).json({ msg: "Todo deleted successfully" });
    cosnole.log("Todo deleted successfully");
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ msg: "Server Error" });
  }
}
