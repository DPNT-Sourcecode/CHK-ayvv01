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

interface GroupOfferMapping {
  groupMembers: string[];
  quantity: number;
  price: number;
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
    price: 70,
    offer: [
      {
        quantity: 2,
        amountToDeduct: 20
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
    price: 20
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
  X: { price: 17 },
  Y: { price: 20 },
  Z: { price: 21 }
};
export const freeMapping: FreeMapping = {
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

export const groupOffer: GroupOfferMapping = {
  groupMembers: ["S", "T", "X", "Y", "Z"],
  quantity: 3,
  price: 45
};




