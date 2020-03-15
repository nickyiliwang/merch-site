import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_ERROR
} from "../types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/FirebaseUtils";

const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

const fetchCollectionsError = errMessage => ({
  type: FETCH_COLLECTIONS_ERROR,
  payload: errMessage
});

export const fetchCollectionsAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(err => dispatch(fetchCollectionsError(err.message)));
};
