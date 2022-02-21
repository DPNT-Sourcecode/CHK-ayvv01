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
        {quantity: 1, product: "A", total: 50},
        {quantity: 1, product: "B", total: 30},
        {quantity: 2, product: "A", total: 100},
    ])("When the customer buys $quantity of $product" ,({quantity, product, total}) => {
        let input = "";
        beforeEach(() => {
            for(let i = 0; i < quantity; i++){
                input = input + product;
            }
        })

        afterEach(() => {
            input = "";
        })

        it(`should total to ${total}`, () => {
            expect(checkout(input)).toEqual(total);
        })
    });

    describe("When an invalid item is given", () => {
        it("should return -1", () => {
            expect(checkout("AA3BBB")).toEqual(-1);
        })
    })
})
