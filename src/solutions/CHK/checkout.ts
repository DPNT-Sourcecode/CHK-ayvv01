interface PriceMapping {
    [key: string]: {
        price: number,
        offer?: {
            quantity: number,
            specialPrice: number
        }
    }
}

export = (SKUs: string) => {
  const priceMapping: PriceMapping = {
    A: {
        price: 50
    },
    B: {
        price:30},
    C: {price:20},
    D: {price: 15}
  };
  const skuInput = SKUs.split("");

  const basket:Record<string, number> = {}


  let total = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    if(!(sku in basket)) basket[sku] = 0;

    basket[sku]++;
    total = total + priceMapping[sku].price;

    if(basket?.A % 3 === 0) total -= 20;
  }

  return total;
};


