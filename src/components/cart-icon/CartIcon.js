import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// styled-component
import { CartIconStyled, ItemCountStyles } from "./CartIconStyles";
// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../Redux/cart/cartActions";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../Redux/cart/cartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyled onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCountStyles>{itemCount}</ItemCountStyles>
  </CartIconStyled>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
