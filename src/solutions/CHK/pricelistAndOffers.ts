interface PriceMapping {
    [key: string]: {
        price: number;
        offer?: MultiBuyOffer[];
    };
}

export interface MultiBuyOffer {
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

export const priceMapping: PriceMapping = {
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
    },
    F: {
        price: 10,
        offer: [
            {
                quantity: 3,
                amountToDeduct: 10
            }
        ]
    },
    G: {
        price: 20
    },
    H: {
        price: 10,
        offer: [{
            quantity: 5,
            amountToDeduct: 5,
        }, {
            quantity: 10,
            amountToDeduct: 20,
        }]
    },
    I: {
        price: 35
    },
    J: {
        price: 60
    }
};
export const freeMapping: FreeMapping = {
    E: {
        quantity: 2,
        itemToGiveFree: "B"
    }
};
