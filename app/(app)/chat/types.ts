import { Id } from "../../../convex/_generated/dataModel";
import { User } from "../(auth)/types";

export interface Chat {
    _id: Id<"chats">;
    name: string;
}

export interface Like {
    _id: Id<"likes">;
    messageId: Id<"messages">;
    user: User;
}

export interface Message {
    _id: Id<"messages">;
    author: string;
    body: string;
    chatId: Id<"chats">;
    likes?: Like[];
}
