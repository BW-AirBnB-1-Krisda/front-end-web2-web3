import { axiosWithAuth } from "../util/axiosWithAuth";
import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";

export const GET_LISTINGS = "GET_LISTINGS";
// export const GET_LISTING_CARD = "GET_LISTING_CARD";

export const LISTING_PROCESSING = "LISTING_PROCESSING";
export const LISTING_FETCHED = "LISTING_FETCHED";
export const LISTING_FAILED_TO_FETCH = "LISTING_FAILED_TO_FETCH";

export const ADD_LISTING_START = "ADD_LISTING_START";
export const ADD_LISTING_SUCCESSFUL = "ADD_LISTING_SUCCESSFUL";

export const DELETE_LISTING = "DELETE_LISTING";
export const EDIT_LISTING = "EDIT_LISTING";


//ACTION CREATOR : REGISTER

export const register = (user, history) => (dispatch) => {
  console.log("Action creator register: ", dispatch);

  dispatch({ type: REGISTER_START });

  axiosWithAuth()
    .post("/auth/register", user)

    .then((res) => {
      console.log("Action creator register POST: ", res.data);

      localStorage.setItem("token", res.data.token);

      dispatch({
        type: REGISTER_SUCCESSFUL,
        payload: res.data,
      });

      console.log("USER ID: ", res.data.id);

      history.push(`/listings/user/${res.data.id}`);
    })

    .catch((err) => {
      console.log("Register NOT successful", err.message);
    });
};


//ACTION CREATOR : LOGIN

export const login = (user, history) => (dispatch) => {
    console.log("Action creator login: ", dispatch);
  
    dispatch({ type: LOGIN_START });
  
    axiosWithAuth()
      .post("/auth/login", user)
  
      .then((res) => {
        console.log("Action creator login POST: ", res.data);
  
        localStorage.setItem("token", res.data.token);
  
        dispatch({
          type: LOGIN_SUCCESSFUL,
          payload: res.data,
        });
  
        console.log("USER ID: ", res.data.user.id);
  
        history.push(`/listings/user/${res.data.user.id}`);
      })
  
      .catch((err) => {
        console.log("Please register in order to log in", err.message);
      });
  };  

//ACTION CREATOR : GET USER LISTINGS

export const getListings = (id) => (dispatch) => {
  console.log("Get listings async action creator: ", dispatch);

  console.log("GET LISTING ID: ", id);

  dispatch({ type: LISTING_PROCESSING });

  axiosWithAuth()
    .get(`/listings/user/${id}`)
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


//ACTION CREATOR : ADD A LISTING

export const addListing = (listings, history) => (dispatch) => {
  console.log("Action creator addListing: ", dispatch);

  dispatch({ type: ADD_LISTING_START });

  axios
    .get(
      `https://airbnbapi-ds.herokuapp.com/predict?city=${listings.city}&room_type=${listings.room_type}&security_deposit=${listings.security_deposit}&guest_included=${listings.guests_included}&mininum_nights=${listings.min_nights}`
    )
    .then((res) => {
      console.log("Action creator addListing DS API POST success: ", res.data);
      axiosWithAuth()
        .post(`/listings/user/4`, res.data)
        .then((response) => {
          console.log(
            "Action creator addListing success POST: ",
            response.data
          );
          dispatch({
            type: ADD_LISTING_SUCCESSFUL,
            payload: response.data,
          });
          getListings();
          history.push("/listings");
        })
        .catch((err) => {
          console.log("AddListing NOT successful: ", err);
        });
    })
    .catch((error) => {
      console.log("AddListing DS API NOT successful: ", error);
    });
};


//ACTION CREATOR : DELETE A LISTING

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


//ACTION CREATOR : EDIT A LISTING

export const editListingAction = (id, listings, history) => (dispatch) => {
  console.log({ type: EDIT_LISTING });

  dispatch({ type: EDIT_LISTING });

  axios
    .post(
      `https://airbnbapi-ds.herokuapp.com/predict?city=${listings.city}&room_type=${listings.room_type}&security_deposit=${listings.security_deposit}&guest_included=${listings.guests_included}&mininum_nights=${listings.min_nights}`
    )
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


//ACTION CREATOR : GET USER LISTINGS

// export const getListingCard = (id) => (dispatch) => {
//   console.log("Get listing card action creator: ", dispatch);

//   dispatch({ type: LISTING_PROCESSING });

//   axiosWithAuth()
//     .get(`/listings/${id}`)
//     .then((res) => {
//       console.log("Action: getListingCard: ", res.data);
//       dispatch({
//         type: LISTING_FETCHED,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log("Action: FAIL to getListingCard: ", err);
//       dispatch({
//         type: LISTING_FAILED_TO_FETCH,
//         payload: err.message,
//       });
//     });
// };
