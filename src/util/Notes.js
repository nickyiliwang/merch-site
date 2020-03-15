// development only logger

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

///////////////////////////////////////////////

// userEffect for Auth with firebase
useEffect(() => {
  // listen for auth state changes
  // unsubscribe function, invoke the auth state change method that calls a async function that awaits
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
}, [setCurrentUser]);

///////////////////////////////////////////////

// reselect notes from Header.js

// same as state.user.currentUser, before reselect
const mapStateToProps = { user: { currentUser }, cart: { hidden } };

// before createStructuredSelector
const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

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
<MenuItem
  key={id}
  title={title}
  imageUrl={imageUrl}
  size={size}
  linkUrl={linkUrl}
/>;

///////////////////////////////////////////////

// nested destructuring
const mapStateToProps = { cart: { cartItems } };

///////////////////////////////////////////////

// From CheckoutItems
// dispatching actions
() => dispatch(clearItemFromCart(cartItem));

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
// collectionReference
const getCollectionSnapshots = async () => {
  // ref to users collection
  const collectionRef = firestore.collection("users");
  // snapshot of that reference
  const collectionSnapshot = await collectionRef.get();
  return collectionSnapshot.docs.map(doc => doc.data());
};

// you get these
[
  ({
    createdAt: Timestamp,
    displayName: "consoleLog",
    email: "consolelog@gmail.com"
  },
  {
    createdAt: Timestamp,
    displayName: "hahajesus",
    email: "jjjjaskdjaksd@gmail.com"
  },
  {
    createdAt: Timestamp,
    displayName: "Yili Wang",
    email: "yw12me@student.ocadu.ca"
  },
  { createdAt: Timestamp, displayName: "nick", email: "nick@gmail.com" })
];

///////////////////////////////////////////////

// batch add collections to firestore

// in App.js and map an an new array that only has the title and items
// collectionsArray is the shop_data

addCollectionAndDocuments(
  "collections",
  collectionsArray.map(({ title, items }) => {
    return { title, items };
  })
);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // batch write for consistency, the entire payload either fail together, or pass together, so we can anticipate the outcome. We can do so with firestore.batch() to do a multi-set.
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // create new empty doc ref to contain new objects with unique keys
    const newDocRef = collectionRef.doc();
    // you need to set the batch in order to commit the sets
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

///////////////////////////////////////////////
// reduce method in utils
// this is a pretty cool way to changing an array of objects into an object of objects, with the title for keys.

transformedCollection.reduce((accumulator, collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
}, {});

///////////////////////////////////////////////
// fetch call without redux
const ShopPage = ({ updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

///////////////////////////////////////////////
// Asynchronous Redux
// using thunk, we can do this syntax
// dispatching redux actions
// we can return functions within our xxxAction functions and dispatch multiple actions within that function. Like handling async fetch calls.
export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");

  collectionRef.get().then(snapshot => {
    const collectionsMap = converCollectionsSnapshotToMap(snapshot);
    updateCollections(collectionsMap);
  });
};
