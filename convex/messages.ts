import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { insertEmojis } from "../lib/emojis";

export const listMessages = query({
    args: {},
    handler: async (ctx) => {
        const messages = await ctx.db.query("messages").order("asc").take(100);

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
        body: v.string(),
        author: v.string(),
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
        user: v.string(),
        messageId: v.id("messages"),
    },
    handler: async (ctx, { user, messageId }) => {
        await ctx.db.insert("likes", { user, messageId });
    },
});
