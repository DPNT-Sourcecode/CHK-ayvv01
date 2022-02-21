import checkout from "../../../src/solutions/CHK/checkout";

/*
+------+-------+------------------------+
| Item | Price | Special offers         |
+------+-------+------------------------+
| A    | 50    | 3A for 130, 5A for 200 |
| B    | 30    | 2B for 45              |
| C    | 20    |                        |
| D    | 15    |                        |
| E    | 40    | 2E get one B free      |
+------+-------+------------------------+
 */

describe("Given a customer buys a list of items", () => {
    describe("When they are not eligible for any special offers", () => {
        describe.each([
            {SKUs: "A", total: 50},
            {SKUs: "B", total: 30},
            {SKUs: "AA", total: 100},
            {SKUs: "C", total: 20},
            {SKUs: "CC", total: 40},
            {SKUs: "CCC", total: 60},
            {SKUs: "ABC", total: 100},
            {SKUs: "D", total: 15},
            {SKUs: "DD", total: 30},
            {SKUs: "DDD", total: 45},
            {SKUs: "ABC", total: 100},
            {SKUs: "CAB", total: 100},
            {SKUs: "AD", total: 65},
            {SKUs: "DB", total: 45},
            {SKUs: "BAACCD", total: 185},
            {SKUs: "E", total: 40},
            {SKUs: "EE", total: 80},
            {SKUs: "EEE", total: 120},
            {SKUs: "DBE", total: 85},
        ])("And the customer buys $SKUs", ({SKUs, total}) => {
            it(`should total to ${total}`, () => {
                expect(checkout(SKUs)).toEqual(total);
            });
        });
    });

    describe("When they are eligible for special offers", () => {
        describe.each([
            {SKUs: "AAA", total: 130},
            {SKUs: "BB", total: 45},
            {SKUs: "EED", total: 80},
            {SKUs: "EEEEDD", total: 160},
            {SKUs: "ABAA", total: 160},
            {SKUs: "AAABB", total: 175},
            {SKUs: "AAAA", total: 180},
            {SKUs: "AAAABB", total: 225},
            {SKUs: "AAAAA", total: 200},
            {SKUs: "AAAAAA", total: 250},
            {SKUs: "AAAAAAAAAAAAAAA", total: 600},
            {SKUs: "AAAAAAAA", total: 330},
            {SKUs: "AAAABBBBBCCDD", total: 370},
            {SKUs: "AAAAABBBBBCCDDEEEE", total: 510},
        ])("And they buy $SKUs", ({SKUs, total}) => {
            it(`should total to ${total}`, () => {
                expect(checkout(SKUs)).toEqual(total);
            });
        });
    })

  describe("When an invalid item is given", () => {
    it("should return -1", () => {
      expect(checkout("AA3BBB")).toEqual(-1);
    });
  });
});

