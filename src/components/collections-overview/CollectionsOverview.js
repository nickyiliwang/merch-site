import React from "react";
import "./collections-overview.scss";
// components
import { CollectionPreview } from "../collection-preview/CollectionPreview";
// styled-components
import styled from "styled-components";
// redux
import { connect } from "react-redux";
// reselect
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../Redux/shop/shopSelector";

const CollectionsOverViewStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverViewStyles>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverViewStyles>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
