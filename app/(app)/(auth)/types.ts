export type User = string | undefined;

export interface Auth {
    signIn: (user: string) => void;
    signOut: () => void;
    user: User;
}
