// reselect notes from Header.js

// same as state.user.currentUser, before reselect
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } })

// before createStructuredSelector
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

// createStructuredSelector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

///////////////////////////////////////////////

// using spread syntax with props

{
  sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ));
}

// without spread
// <MenuItem
//   key={id}
//   title={title}
//   imageUrl={imageUrl}
//   size={size}
//   linkUrl={linkUrl}
// />

///////////////////////////////////////////////

// nested destructuring
// const mapStateToProps = ({ cart: { cartItems } })

///////////////////////////////////////////////

// From CheckoutItems
// dispatching actions
// () => dispatch(clearItemFromCart(cartItem))

// dispatching with onClick and clearItem prop
// onClick={() => clearItem(cartItem)}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item))
});

///////////////////////////////////////////////

// styled components in Header.js
const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

// we needed option Link styles and option div styles, basically reusing our css code in 2 different element

export const OptionLinkStyles = styled(Link)`
  ${OptionStyles}
`;

export const OptionDivStyles = styled.div`
  ${OptionStyles}
`;

// But as it turns out we didn't need OptionDivStyles, because we can use the {as="div"} to say render it as an div element;
<OptionLinkStyles as="div" onClick={() => auth.signOut()}>
  Sign Out
</OptionLinkStyles>;

///////////////////////////////////////////////

// before styled components, we used classes and ternary to get different button styles

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

///////////////////////////////////////////////
