interface PriceMapping {
  [key: string]: {
    price: number;
    offer?: Offer[];
  };
}

interface Offer {
  quantity: number;
  amountToDeduct: number;
}

export = (SKUs: string) => {
  const priceMapping: PriceMapping = {
    A: {
      price: 50,
      offer: [
        {
          quantity: 3,
          amountToDeduct: 20
        }
      ]
    },
    B: {
      price: 30,
      offer: [
        {
          quantity: 2,
          amountToDeduct: 15
        }
      ]
    },
    C: {
      price: 20
    },
    D: {
      price: 15
    },
    E: {
      price: 40,
      offer: [
        {
          quantity: 2,
          amountToDeduct: 40
        }
      ]
    }
  };
  const skuInput = SKUs.split("");

  const basket: Record<string, number> = {};

  let total = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    if (!(sku in basket)) basket[sku] = 0;

    basket[sku]++;
    total = total + priceMapping[sku].price;

    if (priceMapping[sku].offer !== undefined && priceMapping[sku].offer!.length > 0) {
      const offersThatApply: Offer[] = priceMapping[sku].offer!.filter(
        offer => basket[sku] % offer.quantity === 0
      );
      total -= offersThatApply[offersThatApply.length -1].amountToDeduct;
    }
  }

  return total;
};


