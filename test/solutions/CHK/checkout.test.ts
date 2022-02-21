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
| F    | 10    | 2F get one F free      |
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
            {SKUs: "F", total: 10},
            {SKUs: "FF", total: 20},
            {SKUs: "FFAA", total: 120},
            {SKUs: "G", total: 20},
            {SKUs: "GGGG", total: 80},
            {SKUs: "HHH", total: 30},
            {SKUs: "IIII", total: 140},
            {SKUs: "J", total: 60},
            {SKUs: "K", total: 80},
            {SKUs: "LL", total: 180},
            {SKUs: "MMM", total: 45},
            {SKUs: "NN", total: 80},
            {SKUs: "OOOO", total: 40},
            {SKUs: "PP", total: 100},
            {SKUs: "QQ", total: 60},
            {SKUs: "RR", total: 100},
            {SKUs: "SS", total: 40},
            {SKUs: "T", total: 20},
            {SKUs: "UUU", total: 120},
            {SKUs: "V", total: 50},
            {SKUs: "WWW", total: 60},
            {SKUs: "X", total: 90},
            {SKUs: "YY", total: 20},
            {SKUs: "ZZZZ", total: 200},
        ])("And the customer buys $SKUs", ({SKUs, total}) => {
            it(`should total to ${total}`, () => {
                expect(checkout(SKUs)).toEqual(total);
            });
        });
    });

    describe("When they are eligible for special offers", () => {
        describe.each([
            {SKUs: "AAA", total: 130},
            {SKUs: "FFF", total: 20},
            {SKUs: "FFFF", total: 30},
            {SKUs: "FFFFF", total: 40},
            {SKUs: "FFFFFF", total: 40},
            {SKUs: "BB", total: 45},
            {SKUs: "EEB", total: 80},
            {SKUs: "EEEEBB", total: 160},
            {SKUs: "ABAA", total: 160},
            {SKUs: "AAABB", total: 175},
            {SKUs: "AAABBFFF", total: 195},
            {SKUs: "AAAA", total: 180},
            {SKUs: "AAAABB", total: 225},
            {SKUs: "AAAAA", total: 200},
            {SKUs: "AAAAAA", total: 250},
            {SKUs: "AAAAAAAAAAAAAAA", total: 600},
            {SKUs: "AAAAAAAA", total: 330},
            {SKUs: "AAAABBBBBCCDD", total: 370},
            {SKUs: "AAAAABBBBBCCDDEEEE", total: 505},
            {SKUs: "HHHHH", total: 45},
            {SKUs: "HHHHHHHHHH", total: 80},
            {SKUs: "HHHHHH", total: 55},
            {SKUs: "KK", total: 150},
            {SKUs: "KKKHHKK", total: 400},
            {SKUs: "NNNM", total: 120},
            {SKUs: "PPPPP", total: 200},
            {SKUs: "PPPPPPPPPP", total: 400},
            {SKUs: "QQQ", total: 80},
            {SKUs: "QQQQ", total: 110},
            {SKUs: "RRRQ", total: 150},
            {SKUs: "RRRQQQ", total: 210},
            {SKUs: "UUUU", total: 120},
            {SKUs: "UUUUU", total: 160},
            {SKUs: "VV", total: 90},
            {SKUs: "VVV", total: 130},
            {SKUs: "VVVVVV", total: 260},
        ])("And they buy $SKUs", ({SKUs, total}) => {
            it(`should total to ${total}`, () => {
                expect(checkout(SKUs)).toEqual(total);
            });
        });
    })
    describe('When items eligible for the group discount offer are bought',  () => {

    });

  describe("When an invalid item is given", () => {
    it("should return -1", () => {
      expect(checkout("AA3BBB")).toEqual(-1);
    });
  });
});
