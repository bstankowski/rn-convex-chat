import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listChats = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("chats").order("asc").collect();
    },
});

export const getChatDetails = query({
    args: {
        chatId: v.id("chats"),
    },
    handler: async (ctx, { chatId }) => {
        return await ctx.db.get(chatId);
    },
});
