import React, { useEffect } from "react";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
// redux
import { connect } from "react-redux";
import { updateCollections } from "../../Redux/shop/shopActions";
// router
import { Route } from "react-router-dom";
// firebase
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/FirebaseUtils";

class ShopPage extends React.Component {
  unsub = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    const { updateCollections } = this.props;
    this.unsub = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

// const ShopPage = ({ match, updateCollections }) => {
//   useEffect(() => {
//     const collectionRef = firestore.collection("collections");
//     collectionRef.onSnapshot(snapshot => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       updateCollections(collectionsMap);
//     });
//   }, []);

//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
