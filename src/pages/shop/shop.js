import React from "react";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionOverview";
import CategoryPage from "../catagory/category";
// router
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;
