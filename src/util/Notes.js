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
