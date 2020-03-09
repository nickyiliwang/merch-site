import React, { useState, useEffect } from "react";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
// Loading Spinner
import WithLoadingSpinner from "../../components/loading-spinner/WithLoadingSpinner";
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

// HOA Design for loading state
const CollectionOverviewLoading = WithLoadingSpinner(CollectionsOverview);
const CollectionPageLoading = WithLoadingSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewLoading isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageLoading isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
