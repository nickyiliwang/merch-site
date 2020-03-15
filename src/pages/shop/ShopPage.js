import React, { useEffect } from "react";
// components
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";
// Loading Spinner
import WithLoadingSpinner from "../../components/loading-spinner/WithLoadingSpinner";
// redux
import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../Redux/shop/shopActions";
// reselect
import { createStructuredSelector } from "reselect";
import { selectIsFetchFromStore } from "../../Redux/shop/shopSelector";
// router
import { Route } from "react-router-dom";

// HOA Design for loading state
const CollectionOverviewLoading = WithLoadingSpinner(CollectionsOverview);
const CollectionPageLoading = WithLoadingSpinner(CollectionPage);

const ShopPage = ({ match, isCollectionFetching, fetchCollectionsAsync }) => {
  useEffect(() => {
    fetchCollectionsAsync();
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewLoading
            isLoading={isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageLoading isLoading={isCollectionFetching} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsFetchFromStore
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
