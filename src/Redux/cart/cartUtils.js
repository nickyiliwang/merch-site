export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  //   if the existingCartItem exists, we will return a new array with the passed in cart item, and up the quantity by 1, else return the other cart items
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { cartItem }
    );
  }

  //   every time we start with an item, the quantity will be defaulted to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
