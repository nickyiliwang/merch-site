import React from "react";
import "./collection-preview.scss";
// components
import CollectionItem from "../collection-item/CollectionItem";

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items
          .filter((item, i) => i < 4) // limit it to 4 items
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}
