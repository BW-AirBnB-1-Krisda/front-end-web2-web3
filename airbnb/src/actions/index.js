import { axiosWithAuth } from "../util/axiosWithAuth";
import axios from "axios";

export const GET_LISTINGS = "GET_LISTINGS";
export const GET_LISTING_CARD = "GET_LISTING_CARD";

export const ADD_LISTING_START = "ADD_LISTING_START";
export const ADD_LISTING_SUCCESSFUL = "ADD_LISTING_SUCCESSFUL";

export const DELETE_LISTING = "DELETE_LISTING";
export const EDIT_LISTING = "EDIT_LISTING";

export const LISTING_PROCESSING = "LISTING_PROCESSING";
export const LISTING_FETCHED = "LISTING_FETCHED";
export const LISTING_FAILED_TO_FETCH = "LISTING_FAILED_TO_FETCH";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";

export const getListings = () => (dispatch) => {
  console.log("Get listings async action creator: ", dispatch);

  dispatch({ type: LISTING_PROCESSING });

  axiosWithAuth()
    .get("/listings")
    .then((res) => {
      console.log("Action: getListing: ", res.data);
      dispatch({
        type: LISTING_FETCHED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Action: FAIL to getListing: ", err);
      dispatch({
        type: LISTING_FAILED_TO_FETCH,
        payload: err.message,
      });
    });
};

export const getListingCard = (id) => (dispatch) => {
  console.log("Get listing card action creator: ", dispatch);

  dispatch({ type: LISTING_PROCESSING });

  axiosWithAuth()
    .get(`/listings/${id}`)
    .then((res) => {
      console.log("Action: getListingCard: ", res.data);
      dispatch({
        type: LISTING_FETCHED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("Action: FAIL to getListingCard: ", err);
      dispatch({
        type: LISTING_FAILED_TO_FETCH,
        payload: err.message,
      });
    });
};

export const login = (user, history) => (dispatch) => {
  console.log("Action creator login: ", dispatch);

  dispatch({ type: LOGIN_START });

  axiosWithAuth()
    .post("/login", user)
    .then((res) => {
      console.log("Action creator login POST: ", res.data);
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: res.data,
      });

      history.push("/listings");
    })
    .catch((err) => {
      console.log("Please register in order to log in", err.message);
    });
};

export const register = (user, history) => (dispatch) => {
  console.log("Action creator register: ", dispatch);

  dispatch({ type: REGISTER_START });

  axiosWithAuth()
    .post("/register", user)
    .then((res) => {
      console.log("Action creator register POST: ", res.data);
      localStorage.setItem("token", res.data.token);

      dispatch({
        type: REGISTER_SUCCESSFUL,
        payload: res.data,
      });

      history.push("/login");
    })
    .catch((err) => {
      console.log("Register NOT successful", err.message);
    });
};

export const addListing = (listing, history) => (dispatch) => {
  console.log("Action creator addListing: ", dispatch);

  dispatch({ type: ADD_LISTING_START });

  // axiosWithAuth()
  // .post("/listings", listing)
  // .then((res) => {
  //     console.log("Action creator addListing success POST: ", res.data)
  //     getListings()
  //     history.push("/listings")
  // })
  // .catch((err) => {
  //     console.log("AddListing NOT successful: ", err)
  // })

  axios
    .post("https://airbnbapi-ds.herokuapp.com/predict", listing)
    .then((res) => {
      console.log("Action creator addListing DS API POST success: ", res.data);
      //     axiosWithAuth()
      //     .post("/listings", res.data)
      //     .then((response) => {
      //               console.log("Action creator addListing success POST: ", response.data)
      // dispatch({
      //     type: ADD_LISTING_SUCCESSFUL,
      //     payload: response.data
      // })
      //                 getListings()
      //                  history.push("/listings")
      //                  })
      //                 .catch((err) => {
      //                 console.log("AddListing NOT successful: ", err)
      // })
    })
    .catch((error) => {
      console.log("AddListing DS API NOT successful: ", error);
    });
};

export const deleteListing = (id, history) => (dispatch) => {
  console.log("Action creator deleteListing: ", dispatch);

  dispatch({ type: DELETE_LISTING });

  axiosWithAuth()
    .delete(`/listings/${id}`)
    .then((res) => {
      console.log("Action creator deleteListing DELETE: ", res.data);
      getListings();
      history.push("/listings");
      alert("Your listing has successfully been deleted!");
    })
    .catch((err) => {
      console.log("deleteListing NOT successful: ", err);
    });
};

export const editListingAction = (id, listing, history) => (dispatch) => {
  console.log({ type: EDIT_LISTING });

  dispatch({ type: EDIT_LISTING });

  // axiosWithAuth()
  // .put(`/listings/${id}`, listing)
  // .then((res) => {
  //     console.log("Action creator editListingAction PUT: ", res.data)
  //     getListings()
  //     history.push("/listings")
  //     alert("Your listing has successfully been edited!")
  // })
  // .catch((err) => {
  //     console.log("editListingAction NOT successful: ", err)
  // })

  axios
    .post("https://airbnbapi-ds.herokuapp.com/predict", listing)
    .then((res) => {
      console.log("Action creator editListing DS API POST success: ", res.data);
      axiosWithAuth()
        .put(`/listings/${id}`, res.data)
        .then((response) => {
          console.log(
            "Action creator editListing success POST: ",
            response.data
          );
          getListings();
          history.push("/listings");
        })
        .catch((err) => {
          console.log("EditListing NOT successful: ", err);
        });
    })
    .catch((error) => {
      console.log("EditListing DS API NOT successful: ", error);
    });
};
