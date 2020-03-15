import React from "react";
// router
import { useHistory } from "react-router-dom";
// components
import CollectionItem from "../collection-item/CollectionItem";
// styled-components
import {
  CollectionPreviewStyles,
  PreviewStyles,
  TitleStyles
} from "./CollectionPreviewStyles";

export const CollectionPreview = ({ title, items }) => {
  let history = useHistory();

  const handleOnClick = () => {
    const url = encodeURI(title.toLowerCase());
    history.push(`${history.location.pathname}/${url}`);
  };

  return (
    <CollectionPreviewStyles>
      <TitleStyles onClick={handleOnClick}>{title.toUpperCase()}</TitleStyles>
      <PreviewStyles>
        {items
          .filter((item, i) => i < 4) // limit it to 4 items
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewStyles>
    </CollectionPreviewStyles>
  );
};
