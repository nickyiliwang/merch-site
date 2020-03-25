import React from "react";
import {
  CollectionFooter,
  CollectionItemStyles,
  CustomButtonStyles,
  ImageStyle
} from "./CollectionItemStyles";
// redux
import { connect } from "react-redux";
import { addItem } from "../../Redux/cart/cartActions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemStyles>
      <ImageStyle className="image" imageUrl={imageUrl} />
      <CollectionFooter>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </CollectionFooter>
      <CustomButtonStyles
        className="custom-button"
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButtonStyles>
    </CollectionItemStyles>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
