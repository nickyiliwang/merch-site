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

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
