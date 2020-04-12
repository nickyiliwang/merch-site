import React from "react";
// components
import { CollectionPreview } from "../collection-preview/CollectionPreview";
// styled-components
import { CollectionsOverViewStyles } from "./CollectionsOverviewStyles";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/shop/shopSelector";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverViewStyles>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverViewStyles>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
