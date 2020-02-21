import React from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

// redux
import { connect } from "react-redux";
// reselect
import { selectShopCollections } from "../../Redux/shop/shopSelector";
import { createStructuredSelector } from "reselect";

const shopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(shopPage);
