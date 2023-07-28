import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query(async ({ db }) => {
  const todos = await db.query("todos").collect();
  return todos;
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
