export = (SKUs: string) => {
  const priceMapping: Record<string, number> = {
    "A": 50,
    "B": 30
  };

  const skuInput = SKUs.split("");
  console.log(skuInput)
  let total = 0;

  for (const sku of skuInput) {
      if (!(priceMapping.hasOwnProperty()) return -1;
    total = total + priceMapping[sku]
  }

  return total;
};


