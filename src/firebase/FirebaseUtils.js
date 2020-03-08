import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDIJfP4xnbpNWcoqKuKqglKshDlIrfiFDM",
  authDomain: "merch-d2dc1.firebaseapp.com",
  databaseURL: "https://merch-d2dc1.firebaseio.com",
  projectId: "merch-d2dc1",
  storageBucket: "merch-d2dc1.appspot.com",
  messagingSenderId: "362488516968",
  appId: "1:362488516968:web:2be23eb6637e82461946dd"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the user isn't authorized function ends
  if (!userAuth) return;

  // else we take the user reference
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // wait and get a snapshot of the user's profile
  const snapShot = await userRef.get();

  // if the snapshot doesn't exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // this try catch block waits and creates the user in our database
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      // encodeURI is a string converter into an valid URL string
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  console.log(transformedCollection);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
