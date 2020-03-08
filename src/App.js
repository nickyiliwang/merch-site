import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
// pages/components
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import CheckoutPage from "./pages/checkout/Checkout";
// firebase
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "./firebase/FirebaseUtils";
// redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/user/userActions";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/user/userSelector";
import { selectCollectionsForPreview } from "./Redux/shop/shopSelector";

const App = ({ setCurrentUser, currentUser, collectionsArray }) => {
  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribe();
  }, [setCurrentUser]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        {/* <Route exact path="/signin" component={signInSignUp} /> */}
        {/* render instead of component because we want to ternary */}
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </Router>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
