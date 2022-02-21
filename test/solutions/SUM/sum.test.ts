import * as sum from "../../../src/solutions/SUM/sum";

describe("SUM challenge: adding two numbers", () => {
  describe.each([
    { firstInput: 1, secondInput: 2, expectedResult: 3 },
    { firstInput: 45, secondInput: 55, expectedResult: 100 },
    { firstInput: 80, secondInput: 90, expectedResult: 170 }
  ])(
    "Given the integer inputs $firstInput and $secondInput",
    ({ firstInput, secondInput, expectedResult }) => {
      it(`should return ${expectedResult}`, () => {
        expect(sum(firstInput, secondInput)).toEqual(expectedResult);
      });
    }
  );
});
