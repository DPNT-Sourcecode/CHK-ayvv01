import hello from "../../../src/solutions/HLO/hello"

describe('Given the function hello is run',  () => {
    describe("When it is called with an empty parameter", () => {
        it('should return "Hello, World!"', () => {
            expect(hello("")).toEqual("Hello, World!");
        })
    });

    describe.each(["Mark", "Jane", "John", "Patricia"])("When it is called with the name %s", (name) => {
        it(`should return "Hello, ${name}!`, () => {
            expect(hello(name)).toEqual(`Hello, ${name}!`);
        })
    });
});