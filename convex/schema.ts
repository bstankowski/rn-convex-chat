import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    messages: defineTable({
        body: v.string(),
        author: v.string(),
    }),

    likes: defineTable({
        user: v.string(),
        messageId: v.id("messages"),
    }).index("byMessageId", ["messageId"]),
});
