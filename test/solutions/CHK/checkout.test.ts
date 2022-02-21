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

describe("Given a customer buys a list of items", () => {
    describe("When the customer buys 1 of A", () => {
        it("should total to £50", () => {
            expect(checkout("A")).toEqual(50)
        })
    })
})