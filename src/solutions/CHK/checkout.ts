interface PriceMapping {
  [key: string]: {
    price: number;
    offer?: MultiBuyOffer[];
  };
}

interface MultiBuyOffer {
  quantity: number;
  amountToDeduct: number;
}

interface FreeMapping {
  [key: string]: GiveawayOffer;
}

interface GiveawayOffer {
  quantity: number;
  itemToGiveFree: keyof PriceMapping;
}

type Basket = Record<string, number>

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
        price: 40
    }
};
const freeMapping: FreeMapping = {
    E: {
        quantity: 2,
        itemToGiveFree: "B"
    }
};

const removeFree = (basket: Basket, subtotal: number): [Basket, number] => {

    for(const sku of Object.keys(basket)){
        if(freeMapping[sku]){
            const {quantity, itemToGiveFree} = freeMapping[sku];
            if(basket[itemToGiveFree] && basket[itemToGiveFree] > 0) {
                const amountOfFreeToDeduct = Math.floor(basket[sku] / quantity);
                if(amountOfFreeToDeduct !== 0) {
                    if (amountOfFreeToDeduct >= basket[sku]) {
                        basket[sku] -= amountOfFreeToDeduct;
                        subtotal -= priceMapping[itemToGiveFree].price * amountOfFreeToDeduct;
                    } else {
                        subtotal -= priceMapping[itemToGiveFree].price * basket[itemToGiveFree];
                        basket[sku] = 0
                    }
                }
            }
        }
    }
    return [basket, subtotal];
}

const applyOffers = (basket: Record<string, number>, total: number) => {
    for (const sku of Object.keys(basket)) {
        if (priceMapping[sku].offer && priceMapping[sku].offer!.length > 0) {
            let hasOffersLeft = true;
            while (hasOffersLeft) {
                const offersThatApply: MultiBuyOffer[] = priceMapping[sku].offer!.filter(
                    offer => Math.floor(basket[sku] / offer.quantity) > 0
                );

                if (offersThatApply.length > 0) {
                    const offerToUse = offersThatApply[offersThatApply.length - 1];

                    if (offerToUse) {
                        total -= offerToUse.amountToDeduct;
                        basket[sku] -= offerToUse.quantity;
                    }
                } else hasOffersLeft = false;
            }
        }
    }

    return total;
}

export = (SKUs: string) => {
  const skuInput = SKUs.split("");

  const basket: Basket = {};

  let subtotal = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    if (!(sku in basket)) basket[sku] = 0;

    basket[sku]++;
    subtotal = subtotal + priceMapping[sku].price;
  }
    return applyOffers(...removeFree(basket, subtotal))
};


