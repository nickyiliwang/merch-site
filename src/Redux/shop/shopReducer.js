import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR
} from "../types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: ""
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case FETCH_COLLECTIONS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default shopReducer;
