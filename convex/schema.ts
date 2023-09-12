import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    chats: defineTable({
        name: v.string(),
    }),

    messages: defineTable({
        body: v.string(),
        author: v.string(),
        chatId: v.id("chats"),
    }).index("byChatId", ["chatId"]),

    likes: defineTable({
        user: v.string(),
        messageId: v.id("messages"),
    }).index("byMessageId", ["messageId"]),
});
