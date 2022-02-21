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

    describe.each([
        {quantity: 2, product: "A", total: 100},
        {quantity: 4, product: "A", total: 200},
        {quantity: 8, product: "A", total: 400},
    ])("When the customer buys $quantity of $product" ,({quantity, product, total}) => {
        let input: string;
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
    })
})