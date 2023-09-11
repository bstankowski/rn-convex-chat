import { Id } from "../../convex/_generated/dataModel";
import { User } from "../Auth/types";

export interface Like {
    _id: Id<"likes">;
    messageId: Id<"messages">;
    user: User;
}

export interface Message {
    _id: Id<"messages">;
    body: string;
    author: string;
    likes?: Like[];
}
