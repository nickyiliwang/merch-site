import React from "react";
// components
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
// styled-component
import {
  CartDropdownStyles,
  CartItemStyles,
  EmptyMessageStyles
} from "./CartDropdownStyles";
// router
import { withRouter } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/cart/cartSelectors";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyles>
    <CartItemStyles>
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <EmptyMessageStyles>Your Cart is Empty</EmptyMessageStyles>
      )}
    </CartItemStyles>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
