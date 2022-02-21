export = (SKUs: string) => {
  const priceMapping: Record<string, number> = {
    A: 50,
    B: 30,
    C: 20
  };

  const skuInput = SKUs.split("");
  let total = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    total = total + priceMapping[sku];
  }

  return total;
};



