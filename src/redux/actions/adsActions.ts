import { ThunkAction } from "redux-thunk";
import firebase from "../../config/firebaseConfig";

export const addAd = (ad: any) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid;

    firestore
      .collection("ads")
      .add({
        ad,
        // authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_AD",
          ad,
        });
      })
      .catch((err: any) => {
        dispatch({
          type: "ADD_AD_ERR",
          err,
        });
      });
  };
};

export const removeTask = (task: any) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("ads")
      .doc(task.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_AD",
        });
      })
      .catch((err: any) => {
        dispatch({
          type: "REMOVE_AD_ERR",
          err,
        });
      });
  };
};

export const toggleChecked = (task: any) => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("tasks")
      .doc(task.id)
      .set(
        {
          ...task,
          checked: !task.checked,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_CHECKED",
          task,
        });
      })
      .catch((err: any) => {
        dispatch({
          type: "TOGGLE_CHECKED_ERR",
          err,
        });
      });
  };
};

export const getAds = () => {
  return (dispatch: any, getState: any, { getFirebase }: any) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid;

    firestore
      .collection("ads")
      .get()
      .doc()
      .get()
      .then((doc: any) => {
        if (doc.exists) {
          const data = doc.data();
          dispatch({ type: "GET_ADS", data });
        } else {
          console.log("does not exist");
        }
      });
  };
};
