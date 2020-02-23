import { createSelector } from "reselect";

// match.params.collectionID will be used to find the actual indices of collection data
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// curried function: function that returns a function

export const selectCollection = collectionUrlParam =>
  createSelector([selectShopCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
