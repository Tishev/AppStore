export const calcTotalPrice = (items) => items.reduce((acc, card) => (acc += card.price), 0);
