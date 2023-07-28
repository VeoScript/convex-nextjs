import { query } from "./_generated/server";

export const get = query(async ({ db }) => {
  const todos = await db.query("todos").collect();
  return todos;
});
