import {freeMapping, groupOffer, MultiBuyOffer, priceMapping} from "./pricelistAndOffers";

type Basket = Record<string, number>;

const removeFree = (basket: Basket, subtotal: number): [Basket, number] => {
  for (const sku of Object.keys(basket)) {
    if (freeMapping[sku]) {
      const { quantity, itemToGiveFree } = freeMapping[sku];
      if (basket[itemToGiveFree] && basket[itemToGiveFree] > 0) {
        const amountOfFreeToDeduct = Math.floor(basket[sku] / quantity);
        if (amountOfFreeToDeduct !== 0) {
          if (amountOfFreeToDeduct <= basket[sku]) {
            basket[itemToGiveFree] -= amountOfFreeToDeduct;
            subtotal -=
              priceMapping[itemToGiveFree].price * amountOfFreeToDeduct;
          } else {
            subtotal -=
              priceMapping[itemToGiveFree].price * basket[itemToGiveFree];
            basket[itemToGiveFree] = 0;
          }
        }
      }
    }
  }
  return [basket, subtotal];
};

const applyIndividualOffers = (basket: Record<string, number>, total: number) => {
  for (const sku of Object.keys(basket)) {
    if (priceMapping[sku].offer && priceMapping[sku].offer!.length > 0) {
      let hasOffersLeft = true;
      while (hasOffersLeft) {
        const offersThatApply: MultiBuyOffer[] = priceMapping[
          sku
        ].offer!.filter(offer => Math.floor(basket[sku] / offer.quantity) > 0);

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
};

const applyGroupOffers = (basket: Basket, subtotal: number, itemsForGroupOffer: string[]): [Basket, number] => {
  itemsForGroupOffer.sort((a, b) => {
    if(priceMapping[a] > priceMapping[b]) return 1;
    if(priceMapping[b] > priceMapping[a]) return -1;
    return 0
  })
  while(itemsForGroupOffer.length >= 3){
    for(let i = 0; i < 3; i++) {
      const item = itemsForGroupOffer.pop()!;
      subtotal -= priceMapping[item].price;
    }
    subtotal += 45;
  }

  while(itemsForGroupOffer.length){
    const item = itemsForGroupOffer.pop()!;
    subtotal += priceMapping[item].price;
  }

  return [basket, subtotal]
}

export = (SKUs: string) => {
  const skuInput = SKUs.split("");

  const basket: Basket = {};
  const itemsForGroupOffer = [];

  let subtotal = 0;

  for (const sku of skuInput) {
    if (!(sku in priceMapping)) return -1;
    if(groupOffer.groupMembers.includes(sku)) {
      itemsForGroupOffer.push(sku);
      continue;
    }
    if (!(sku in basket)) basket[sku] = 0;

    basket[sku]++;
    subtotal = subtotal + priceMapping[sku].price;
  }
  return applyIndividualOffers(...removeFree(...applyGroupOffers(basket, subtotal, itemsForGroupOffer)));
};




