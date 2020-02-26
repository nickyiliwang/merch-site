import React from "react";
import "./checkout.scss";
// components
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";
// redux
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal
} from "../../Redux/cart/cartSelectors";
// reselect
import { createStructuredSelector } from "reselect";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>{`TOTAL: $${total}`}</span>
    </div>
    <div className="test-warning">
      This app is an development app, please use this credit card number 4242
      4242 4242 4242, EXP date: 01/20, CVV:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
