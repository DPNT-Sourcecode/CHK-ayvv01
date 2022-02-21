"use strict";
const pricelistAndOffers_1 = require("./pricelistAndOffers");
const removeFree = (basket, subtotal) => {
    for (const sku of Object.keys(basket)) {
        if (pricelistAndOffers_1.freeMapping[sku]) {
            const { quantity, itemToGiveFree } = pricelistAndOffers_1.freeMapping[sku];
            if (basket[itemToGiveFree] && basket[itemToGiveFree] > 0) {
                const amountOfFreeToDeduct = Math.floor(basket[sku] / quantity);
                if (amountOfFreeToDeduct !== 0) {
                    if (amountOfFreeToDeduct <= basket[sku]) {
                        basket[itemToGiveFree] -= amountOfFreeToDeduct;
                        subtotal -=
                            pricelistAndOffers_1.priceMapping[itemToGiveFree].price * amountOfFreeToDeduct;
                    }
                    else {
                        subtotal -=
                            pricelistAndOffers_1.priceMapping[itemToGiveFree].price * basket[itemToGiveFree];
                        basket[itemToGiveFree] = 0;
                    }
                }
            }
        }
    }
    return [basket, subtotal];
};
const applyIndividualOffers = (basket, total) => {
    for (const sku of Object.keys(basket)) {
        if (pricelistAndOffers_1.priceMapping[sku].offer && pricelistAndOffers_1.priceMapping[sku].offer.length > 0) {
            let hasOffersLeft = true;
            while (hasOffersLeft) {
                const offersThatApply = pricelistAndOffers_1.priceMapping[sku].offer.filter(offer => Math.floor(basket[sku] / offer.quantity) > 0);
                if (offersThatApply.length > 0) {
                    const offerToUse = offersThatApply[offersThatApply.length - 1];
                    if (offerToUse) {
                        total -= offerToUse.amountToDeduct;
                        basket[sku] -= offerToUse.quantity;
                    }
                }
                else
                    hasOffersLeft = false;
            }
        }
    }
    return total;
};
const applyGroupOffers = (basket, subtotal, itemsForGroupOffer) => {
    itemsForGroupOffer.sort((a, b) => {
        if (pricelistAndOffers_1.priceMapping[a] > pricelistAndOffers_1.priceMapping[b])
            return 1;
        if (pricelistAndOffers_1.priceMapping[b] > pricelistAndOffers_1.priceMapping[a])
            return -1;
        return 0;
    });
    while (itemsForGroupOffer.length >= 3) {
        for (let i = 0; i < 3; i++) {
            const item = itemsForGroupOffer.pop();
        }
        subtotal += 45;
    }
    while (itemsForGroupOffer.length) {
        const item = itemsForGroupOffer.pop();
        subtotal += pricelistAndOffers_1.priceMapping[item].price;
    }
    return [basket, subtotal];
};
module.exports = (SKUs) => {
    const skuInput = SKUs.split("");
    const basket = {};
    const itemsForGroupOffer = [];
    let subtotal = 0;
    for (const sku of skuInput) {
        if (!(sku in pricelistAndOffers_1.priceMapping))
            return -1;
        if (pricelistAndOffers_1.groupOffer.groupMembers.includes(sku)) {
            itemsForGroupOffer.push(sku);
            continue;
        }
        if (!(sku in basket))
            basket[sku] = 0;
        basket[sku]++;
        subtotal = subtotal + pricelistAndOffers_1.priceMapping[sku].price;
    }
    return applyIndividualOffers(...removeFree(...applyGroupOffers(basket, subtotal, itemsForGroupOffer)));
};
