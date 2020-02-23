import React from "react";
import "./collection.scss";
// components
import CollectionItem from "../../components/collection-item/CollectionItem";
// redux
import { connect } from "react-redux";
// reselect
import { selectCollection } from "../../Redux/shop/shopSelector";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// the selectCollection selector needs a piece of the state depending on the URL param. Thus, (state)
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
