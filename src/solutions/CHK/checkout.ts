export = (SKUs: string) => {
    const priceMapping = {
        "A": 50,
        "B": 30
    }

    return SKUs.split("").reduce((accumulator, sku) => {
        switch(sku) {
            case "A":
                return accumulator + priceMapping.A;
            case "B":
                return accumulator + priceMapping.B;
            default:
                return -1;
        }
        }, 0)
};