import { insertEmojis } from "./emojis";

describe("emojis", () => {
    test("converts known emoticons in text to emojis", () => {
        expect(insertEmojis("Hello :)")).toBe("Hello 🙂");

        expect(insertEmojis(":( A message :p with :| multiple emoticons :o")).toBe(
            "🙁 A message 😛 with 😐 multiple emoticons 😮"
        );
    });

    test("leaves not known emoticons intact", () => {
        expect(insertEmojis("(: No known emoticons here :-O")).toBe(
            "(: No known emoticons here :-O"
        );
    });

    test("leaves the original text intact if there are no known emoticons", () => {
        expect(insertEmojis("No emoticons")).toBe("No emoticons");
    });
});
