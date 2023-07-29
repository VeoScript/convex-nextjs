import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query(async ({ db }) => {
  const todos = await db.query("todos").collect();
  return todos;
});

export const addTodo = mutation({
  args: {
    title: v.string(),
  },
  handler: async ({ db }, { title }) => {
    await db.insert("todos", {
      title,
      done: false,
    });
  },
});

export const updateTodo = mutation({
  args: {
    _id: v.id("todos"),
    done: v.boolean(),
  },
  handler: async ({ db }, { _id, done }) => {
    await db.patch(_id, {
      done,
    });
  },
});

export const deleteTodo = mutation({
  args: {
    _id: v.id("todos"),
  },
  handler: async ({ db }, { _id }) => {
    await db.delete(_id);
  },
});
