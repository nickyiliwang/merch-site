import React from "react";
import "./CollectionPreview.scss";

import CollectionItem from "../collection-item/CollectionItem";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4) // limit it to 4 items
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
}
