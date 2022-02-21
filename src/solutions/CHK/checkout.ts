export = (SKUs: string) => {
  const priceMapping: Record<string, number> = {
    A: 50,
    B: 30
  };

  const skuInput = SKUs.split("");
  let total = 0;

  for (const sku of skuInput) {
    if (!(sku in Object.keys(priceMapping))) return -1;
    total = total + priceMapping[sku]
    switch (sku) {
      case "A":
        total = total + priceMapping.A;
        break;
      case "B":
        total = total + priceMapping.B;
        break;
    }
  }

  return total;
};
