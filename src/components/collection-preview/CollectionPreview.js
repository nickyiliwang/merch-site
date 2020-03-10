import React from "react";
import "./collection-preview.scss";
// router
import { useHistory } from "react-router-dom";
// components
import CollectionItem from "../collection-item/CollectionItem";

export const CollectionPreview = ({ title, items }) => {
  let history = useHistory();

  const handleOnClick = () => {
    const url = encodeURI(title.toLowerCase());
    history.push(`${history.location.pathname}/${url}`);
  };

  return (
    <div className="collection-preview">
      <h2 className="title" onClick={handleOnClick}>
        {title.toUpperCase()}
      </h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4) // limit it to 4 items
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};
