interface PriceMapping {
  [key: string]: {
    price: number;
    offer?: Offer[];
  };
}

interface Offer {
  quantity: number;
  amountToDeductFromPreviousOffer: number;
}

export = (SKUs: string) => {
  const priceMapping: PriceMapping = {
    A: {
      price: 50,
      offer: [
        {
          quantity: 3,
          amountToDeductFromPreviousOffer: 20
        },
        {
          quantity: 5,
          amountToDeductFromPreviousOffer: 30
        }
      ]
    },
    B: {
      price: 30,
      offer: [
        {
          quantity: 2,
          amountToDeductFromPreviousOffer: 15
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
          amountToDeductFromPreviousOffer: 40
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

    if (priceMapping[sku].offer && priceMapping[sku].offer!.length > 0) {
      const offersThatApply: Offer[] = priceMapping[sku].offer!.filter(
        offer => basket[sku] % offer.quantity === 0
      );

      if (offersThatApply.length > 0)
        total -= offersThatApply[offersThatApply.length - 1].amountToDeductFromPreviousOffer;
    }
  }

  return total;
};




