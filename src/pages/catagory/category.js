import React from "react";
import "./category.scss";

import CollectionItem from "../../components/collection-item/CollectionItem";

const CategoryPage = ({ match }) => {
  console.log(match);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
