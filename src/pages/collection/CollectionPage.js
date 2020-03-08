import React from "react";
// components
import CollectionItem from "../../components/collection-item/CollectionItem";
// styled-components
import {
  CollectionPageStyles,
  ItemsStyles,
  TitleStyles
} from "./CollectionPageStyle";

// redux
import { connect } from "react-redux";
// reselect
import { selectCollection } from "../../Redux/shop/shopSelector";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageStyles>
      <TitleStyles>{title}</TitleStyles>
      <ItemsStyles>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsStyles>
    </CollectionPageStyles>
  );
};

// the selectCollection selector needs a piece of the state depending on the URL param. Thus, (state)
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
