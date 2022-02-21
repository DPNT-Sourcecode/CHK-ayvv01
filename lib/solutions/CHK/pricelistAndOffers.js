"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeMapping = exports.priceMapping = void 0;
exports.priceMapping = {
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
        offer: [
            {
                quantity: 5,
                amountToDeduct: 5
            },
            {
                quantity: 10,
                amountToDeduct: 20
            }
        ]
    },
    I: {
        price: 35
    },
    J: {
        price: 60
    },
    K: {
        price: 80,
        offer: [
            {
                quantity: 2,
                amountToDeduct: 10
            }
        ]
    },
    L: {
        price: 90
    },
    M: {
        price: 15
    },
    N: {
        price: 40
    },
    O: {
        price: 10
    },
    P: {
        price: 50,
        offer: [
            {
                quantity: 5,
                amountToDeduct: 50
            }
        ]
    },
    Q: {
        price: 30,
        offer: [
            {
                quantity: 3,
                amountToDeduct: 10
            }
        ]
    },
    R: {
        price: 50
    },
    S: {
        price: 30
    },
    T: {
        price: 20
    },
    U: {
        price: 40,
        offer: [
            {
                quantity: 4,
                amountToDeduct: 40
            }
        ]
    },
    V: {
        price: 50,
        offer: [
            {
                quantity: 2,
                amountToDeduct: 10
            },
            {
                quantity: 3,
                amountToDeduct: 20
            }
        ]
    },
    W: { price: 20 },
    X: { price: 90 },
    Y: { price: 10 },
    Z: { price: 50 }
};
exports.freeMapping = {
    E: {
        quantity: 2,
        itemToGiveFree: "B"
    },
    N: {
        quantity: 3,
        itemToGiveFree: "M"
    },
    R: {
        quantity: 3,
        itemToGiveFree: "Q"
    }
};
