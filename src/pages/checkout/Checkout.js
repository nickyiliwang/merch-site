import React from "react";
import "./checkout.scss";
// components
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";
// styled-components
import {
  CheckoutPageStyles,
  CheckoutHeaderStyles,
  HeaderBlockStyles,
  TextWarningStyles,
  TotalStyles
} from "./CheckOutStyles";
// redux
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal
} from "../../Redux/cart/cartSelectors";
// reselect
import { createStructuredSelector } from "reselect";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageStyles>
    <CheckoutHeaderStyles>
      <HeaderBlockStyles>
        <span>Product</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Description</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Quantity</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Price</span>
      </HeaderBlockStyles>
      <HeaderBlockStyles>
        <span>Remove</span>
      </HeaderBlockStyles>
    </CheckoutHeaderStyles>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalStyles>
      <span>{`TOTAL: $${total}`}</span>
    </TotalStyles>
    <TextWarningStyles>
      This app is an development app, please use this credit card number 4242
      4242 4242 4242, EXP date: 01/20, CVV:123
    </TextWarningStyles>
    <StripeCheckoutButton price={total} />
  </CheckoutPageStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
