import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { insertEmojis } from "../lib/emojis";

export const listMessages = query({
    args: {
        chatId: v.id("chats"),
    },
    handler: async (ctx, { chatId }) => {
        const messages = await ctx.db
            .query("messages")
            .withIndex("byChatId", (q) => q.eq("chatId", chatId))
            .order("asc")
            .collect();

        // Find likes for each message and add them to the returned object
        const withLikes = await Promise.all(
            messages.map(async (message) => {
                const likes = await ctx.db
                    .query("likes")
                    .withIndex("byMessageId", (q) => q.eq("messageId", message._id))
                    .collect();

                return {
                    ...message,
                    likes,
                };
            })
        );

        return withLikes;
    },
});

export const sendMessage = mutation({
    args: {
        author: v.string(),
        body: v.string(),
        chatId: v.id("chats"),
    },

    handler: async (ctx, message) => {
        await ctx.db.insert("messages", {
            ...message,
            body: insertEmojis(message.body),
        });
    },
});

export const deleteMessage = mutation({
    args: {
        id: v.id("messages"),
    },
    handler: async (ctx, { id }) => {
        await ctx.db.delete(id);
    },
});

export const likeMessage = mutation({
    args: {
        messageId: v.id("messages"),
        user: v.string(),
    },
    handler: async (ctx, { messageId, user }) => {
        await ctx.db.insert("likes", { messageId, user });
    },
});
