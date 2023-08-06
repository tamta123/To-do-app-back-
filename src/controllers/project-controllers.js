import TodoItem from "../models/project.js";

export const CrateTodoList = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const NewTodoItem = new TodoItem({
      title,
      completed,
    });
    NewTodoItem.save;
    return res.status(201).json(newItem);
  } catch (error) {
    return res.status(401).json(error);
  }
};
