export = (SKUs: string) => {
  const priceMapping: Record<string, number> = {
    A: 50,
    B: 30
  };

  const skuInput = SKUs.split("");
  console.log(skuInput)
  let total = 0;

  for (const sku of skuInput) {
      console.log(Object.keys(priceMapping))
      console.log(sku)
      console.log(sku in Object.keys(priceMapping))
      if (!(sku in Object.keys(priceMapping))) return -1;
    total = total + priceMapping[sku]
  }

  return total;
};

