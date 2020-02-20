import { createSelector } from "reselect";

// Memoization: optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs/state occur again.

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Was in CartIcons
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
