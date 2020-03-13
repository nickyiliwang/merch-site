import React from "react";
import { CartItemStyles, ItemDetailsStyles } from "./CartItemStyles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemStyles>
    <img src={imageUrl} alt="item" />
    <ItemDetailsStyles>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </ItemDetailsStyles>
  </CartItemStyles>
);

export default CartItem;
