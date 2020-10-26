import { axiosWithAuth } from "../util/axiosWithAuth";
import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

// export const GET_LISTINGS = "GET_LISTINGS";

export const LISTING_PROCESSING = "LISTING_PROCESSING";
export const LISTING_FETCHED = "LISTING_FETCHED";
export const LISTING_FAILED_TO_FETCH = "LISTING_FAILED_TO_FETCH";

export const ADD_LISTING_START = "ADD_LISTING_START";
export const ADD_LISTING_SUCCESSFUL = "ADD_LISTING_SUCCESSFUL";

export const EDIT_LISTING_START = "EDIT_LISTING_START";
export const EDIT_LISTING_SUCCESSFUL = "EDIT_LISTING_SUCCESSFUL";

export const DELETE_LISTING = "DELETE_LISTING";


//ACTION CREATOR : REGISTER

export const register = (user, history) => (dispatch) => {
  // console.log("Action creator register: ", dispatch);

  dispatch({ type: REGISTER_START });

  axiosWithAuth()
    .post("/auth/register", user)

    .then((res) => {
      console.log("Action creator Register successful: ", res.data);

      dispatch({
        type: REGISTER_SUCCESSFUL,
        payload: res.data,
      });

      // console.log("USER ID: ", res.data.id);

      history.push(`/login`);
    })

    .catch((err) => {
      console.log("Action creator Register failed", err.message);
    });
};


//ACTION CREATOR : LOGIN

export const login = (user, history) => (dispatch) => {
    // console.log("Action creator login: ", dispatch);
  
    dispatch({ type: LOGIN_START });
  
    axiosWithAuth()
      .post("/auth/login", user)
  
      .then((res) => {
        console.log("Action creator Login successful: ", res.data);
  
        localStorage.setItem("token", res.data.token);
  
        dispatch({
          type: LOGIN_SUCCESSFUL,
          payload: res.data,
        });
  
        // console.log("USER ID: ", res.data.user.id);
  
        history.push(`/listings/user/${res.data.user.id}`);
      })
  
      .catch((err) => {
        console.log("Action creator Login failed", err.message);
      });
  };  

//ACTION CREATOR : GET USER LISTINGS

export const getListings = (id) => (dispatch) => {
  // console.log("Get listings async action creator: ", dispatch);

  // console.log("GET USER LISTING ID: ", id);

  dispatch({ type: LISTING_PROCESSING });

  axiosWithAuth()
    .get(`/listings/user/${id}`)
    .then((res) => {
      console.log("Action creator get user listings successful: ", res.data);
      dispatch({
        type: LISTING_FETCHED,
        payload: res.data,
      });

      // console.log("HISTORY PUSH ID: ", userId)
      //       history.push(`/listings/user/${userId}`);
    })
    .catch((err) => {
      console.log("Action creator get user listings failed: ", err);
      dispatch({
        type: LISTING_FAILED_TO_FETCH,
        payload: err.message,
      });
    });
};

//ACTION CREATOR : ADD A LISTING WITH OPTIMAL PRICE

export const addListing = (listings, id, history) => (dispatch) => {
  // console.log("Action creator addListing: ", dispatch);

  dispatch({ type: ADD_LISTING_START });

  axios
  .get(
    `https://airbnbapi-ds.herokuapp.com/predict?city=${listings.city}&room_type=${listings.room_type}&security_deposit=${listings.security_deposit}&guests_included=${listings.guests_included}&mininum_nights=${listings.min_nights}`
  )
  .then((res) => {
          console.log("Action creator AddListing Optimal Price successfully fetched DS API data: ", res.data.prediction);
          axiosWithAuth()
          .post(`/listings/user/${id}`, res.data.prediction)
          .then((response) => {
            console.log(
              "Action creator AddListing successfully connected DS API to Backend API: ",
              response.data
            );
            dispatch({
              type: ADD_LISTING_SUCCESSFUL,
              payload: response.data,
            });
            // getListings(id, history, userId);
            history.push(`/listings/user/${response.data.user_id}`);
          })
          .catch((err) => {
            console.log("Action creator AddListing failed to connect DS API to Backend API: ", err);
          });
        })
          .catch((error) => {
                  console.log("Action creator AddListing Optimal Price failed to fetch DS API data: ", error);
                });
            }


//ACTION CREATOR : EDIT A LISTING AND UPDATES THE OPTIMAL PRICE

export const editListingAction = (listingId, listings, history) => (dispatch) => {
  // console.log("Action creator editListing: ", dispatch);

  dispatch({ type: EDIT_LISTING_START });

  axios
  .get(
    `https://airbnbapi-ds.herokuapp.com/predict?city=${listings.city}&room_type=${listings.room_type}&security_deposit=${listings.security_deposit}&guests_included=${listings.guests_included}&mininum_nights=${listings.min_nights}`
  )
  .then((res) => {
    console.log("Action creator EditListing Optimal Price successfully fetched DS API data: ", res.data.prediction);
    axiosWithAuth()
          .put(`/listings/${listingId}`, res.data.prediction)
          .then((response) => {
            console.log(
              "Action creator EditListing successful: ",
              response.data
            );
            dispatch({
              type: EDIT_LISTING_SUCCESSFUL,
              payload: response.data,
            });
            history.push(`/listings/user/${response.data.user_id}`);
          })
          .catch((err) => {
            console.log("Action creator EditListing failed: ", err);
          });
        })
          .catch((error) => {
            console.log("EditListing Optimal Price failed to connect to DS API: ", error);
          });
        }


          //ACTION CREATOR : DELETE A LISTING

export const deleteListing = (id) => (dispatch) => {
  // console.log("Action creator deleteListing: ", dispatch);

  dispatch({ type: DELETE_LISTING });

  // console.log("DELETE ID: ", id)

  axiosWithAuth()
    .delete(`/listings/${id}`)
    .then((res) => {
      console.log("Action creator DeleteListing successful: ", res.data);

    })
    .catch((err) => {
      console.log("Action creator DeleteListing failed: ", err);
    });
};


