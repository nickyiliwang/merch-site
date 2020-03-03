import React from "react";
// components
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
// styled-components
import {
  HeaderStyles,
  LogoStyles,
  OptionsStyles,
  OptionLinkStyles,
  OptionDivStyles
} from "./HeaderStyles";
// logo
import { ReactComponent as Logo } from "../../assets/crown.svg";
// firebase
import { auth } from "../../firebase/FirebaseUtils";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Redux/cart/cartSelectors";
import { selectCurrentUser } from "../../Redux/user/userSelector";

const Header = ({ currentUser, hidden }) => (
  <HeaderStyles>
    <LogoStyles to="/">
      <Logo className="logo" />
    </LogoStyles>
    <OptionsStyles>
      <OptionLinkStyles to="/shop">SHOP</OptionLinkStyles>
      <OptionLinkStyles to="/shop">CONTACT</OptionLinkStyles>
      {currentUser ? (
        <OptionDivStyles onClick={() => auth.signOut()}>
          Sign Out
        </OptionDivStyles>
      ) : (
        <OptionLinkStyles to="/signin">Sign In</OptionLinkStyles>
      )}
      <CartIcon />
    </OptionsStyles>
    {!hidden && <CartDropdown />}
  </HeaderStyles>
);

// createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
