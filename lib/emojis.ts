/**
 * Replaces some of the most commonly used emoticons with their emoji equivalents
 */
export function insertEmojis(text: string) {
    const emojis = new Map([
        [":)", "🙂"],
        [":(", "🙁"],
        [":D", "😀"],
        [":P", "😛"],
        [":p", "😛"],
        [":O", "😮"],
        [":o", "😮"],
        [":|", "😐"],
        [":/", "😕"],
        [":*", "😘"],
    ]);

    return Array.from(emojis.entries()).reduce(
        (text, [emoticon, emoji]) => text.replaceAll(emoticon, emoji),
        text
    );
}
