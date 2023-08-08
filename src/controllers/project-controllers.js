import TodoItem from "../models/Project.js";

export const crateTodoList = async (req, res) => {
  const { task, completed } = req.body;
  try {
    const NewTodoItem = new TodoItem({
      task,
      completed,
    });
    await NewTodoItem.save();
    return res.status(201).json(NewTodoItem);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const getList = async (req, res) => {
  try {
    const data = await TodoItem.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const todoUpdate = async (req, res) => {
  try {
    const itemId = req.params.id;

    // Find the To-Do item by ID
    const todoItem = await TodoItem.findById(itemId);

    if (!todoItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Update the completed status based on the request body
    todoItem.completed = !todoItem.completed;
    // Save the updated To-Do item
    await todoItem.save();

    res.status(200).json(todoItem);
  } catch (error) {
    console.error("Error updating To-Do item:", error);
    res.status(401).json({ error: "An error occurred" });
  }
};

// DELETE request to remove a Todo item
export const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;

    // Find and remove the Todo item by ID
    const removedItem = await TodoItem.findOneAndDelete({ _id: itemId });

    if (!removedItem) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json({ message: "Item removed successfully" });
  } catch (error) {
    console.error("Error removing Todo item:", error);
    res.status(401).json({ error: "An error occurred" });
  }
};

export const deleteCompletedItems = async (req, res) => {
  try {
    const result = await TodoItem.deleteMany({ completed: true });
    if (result.deletedCount > 0) {
      res.status(200).json("Completed items deleted successfully");
    } else {
      res.status(404).json("No completed items found");
    }
  } catch (error) {
    res.status(404).json({ error: "Error deleting the completed items" });
  }
};
