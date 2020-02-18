import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
// redux
import { connect } from "react-redux";
// reselect
import { selectCartItems } from "../../Redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
