import hello from "../../../src/solutions/HLO/hello"

describe('Given the function hello is run with an string empty parameter',  () => {
    it('should return "Hello World"', () => {
        expect(hello("")).toEqual("Hello World");
    })
});
