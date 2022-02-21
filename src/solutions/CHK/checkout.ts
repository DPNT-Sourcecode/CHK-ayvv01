export = (SKUs: string) => {
  const priceMapping: Record<string, number> = {
    A: 50,
    B: 30,
    C: 20,
    D: 15
  };
  const skuInput = SKUs.split("");

  const basket:Record<string, number> = {}


  let total = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    if(!(sku in basket)) basket[sku] = 0;

    basket[sku]++;
    total = total + priceMapping[sku];

    if(basket?.A % 3 === 0) total -= 20;
  }

  return total;
};

