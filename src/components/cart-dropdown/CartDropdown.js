import React from "react";
import "./cart-dropdown.scss";
// components
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
// router
import { withRouter } from "react-router-dom";
// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../Redux/cart/cartSelectors";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
