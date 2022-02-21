import checkout from "../../../src/solutions/CHK/checkout"

/*
+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
 */

describe("Given a customer buys a list of items without any offers", () => {
    describe.each([
        {SKUs: "A", total: 50},
        {SKUs: "B", total: 30},
        {SKUs: "AA", total: 100},
        {SKUs: "C", total: 20},
        {SKUs: "CC", total: 40},
        {SKUs: "CCC", total: 60},
        {SKUs: "ABC", total: 100},
    ])("When the customer buys $SKUs" ,({SKUs, total}) => {
        it(`should total to ${total}`, () => {
            expect(checkout(SKUs)).toEqual(total);
        })
    });

    describe("When an invalid item is given", () => {
        it("should return -1", () => {
            expect(checkout("AA3BBB")).toEqual(-1);
        })
    })
})

