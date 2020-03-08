import React, { useEffect } from "react";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
// router
import { Route } from "react-router-dom";
// firebase
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/FirebaseUtils";

const ShopPage = ({ match }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
