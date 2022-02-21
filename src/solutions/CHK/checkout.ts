export = (SKUs: string) => {
    const priceMapping = {
        "A": 50,
        "B": 30
    }
    const inputSKUs = SKUs.split("");

    let total = 0;

    for(const sku of inputSKUs){
        if(sku === "A") total += priceMapping.A;
        if(sku === "B") total += priceMapping.B;
    }

    return total;
};