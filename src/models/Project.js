import { Schema, model } from "mongoose";

const projectsSchema = new Schema({
  title: {
    type: Schema.Types.String,
    require: true,
  },
  completed: {
    type: Schema.Types.Boolean,
    require: true,
  },
});

const TodoItem = model("projects", projectsSchema);

export default TodoItem;
