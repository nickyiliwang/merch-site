import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// components
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/Header";
import signInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
// firebase
import { auth } from "./firebase/FirebaseUtils";
import { createUserProfileDocument } from "./firebase/FirebaseUtils";
// redux
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/actions/userActions";

function App({ setCurrentUser }) {

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInSignUp} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
