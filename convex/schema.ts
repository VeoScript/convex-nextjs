import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    done: v.boolean(),
    title: v.string(),
  }),
});
