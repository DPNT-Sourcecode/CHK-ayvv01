interface PriceMapping {
  [key: string]: {
    price: number;
    offer?: Offer[];
  };
}

interface MultiBuyOffer {
  quantity: number;
  amountToDeduct: number;
}

interface GiveawayOffer {
  quantity: number;
  itemToGiveFree: keyof PriceMapping;
}

type Offer = MultiBuyOffer | GiveawayOffer;

function isMultiBuyOffer(offer: Offer): offer is MultiBuyOffer {
  return (offer as MultiBuyOffer).amountToDeduct !== undefined;
}

export = (SKUs: string) => {
  const priceMapping: PriceMapping = {
    A: {
      price: 50,
      offer: [
        {
          quantity: 3,
          amountToDeduct: 20
        },
        {
          quantity: 5,
          amountToDeduct: 50
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
          itemToGiveFree: "B"
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
  }

  for (const sku of Object.keys(basket)) {
    if (priceMapping[sku].offer && priceMapping[sku].offer!.length > 0) {
      let hasOffersLeft = true;
      while (hasOffersLeft) {
        const offersThatApply: Offer[] = priceMapping[sku].offer!.filter(
          offer => Math.floor(basket[sku] / offer.quantity) > 0
        );

        console.log(offersThatApply.length);
        if (offersThatApply.length > 0) {
          const offerToUse = offersThatApply[offersThatApply.length - 1];

          if (isMultiBuyOffer(offerToUse)) {
            total -= offerToUse.amountToDeduct;
            basket[sku] -= offerToUse.quantity;
          } else {
            if (
              basket[offerToUse.itemToGiveFree] &&
              basket[offerToUse.itemToGiveFree] > 0
            ) {
              total -= priceMapping[offerToUse.itemToGiveFree].price;
              basket[offerToUse.itemToGiveFree]--;
            }
            basket[sku] -= offerToUse.quantity;
          }
        } else hasOffersLeft = false;
      }
    }
  }

  return total;
};






