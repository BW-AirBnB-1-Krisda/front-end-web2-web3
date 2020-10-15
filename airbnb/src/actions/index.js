import { axiosWithAuth } from "../util/axiosWithAuth"

export const GET_LISTINGS = "GET_LISTINGS"
export const ADD_LISTING = "ADD_LISTING"
export const DELETE_LISTING = "DELETE_LISTING"
export const EDIT_LISTING = "EDIT_LISTING"

export const LISTING_PROCESSING = "LISTING_PROCESSING"
export const LISTING_FETCHED = "LISTING_FETCHED"
export const LISTING_FAILED_TO_FETCH = "LISTING_FAILED_TO_FETCH"

export const LOGIN = "LOGIN"

export const getListings = () => (dispatch) => {

    console.log("Get listings async action creator: ", dispatch)

    dispatch( { type: LISTING_PROCESSING } )

    axiosWithAuth()
    .get("/listings")
    .then((res) => {
        console.log("Action: getListing: ", res.data)
        dispatch({
            type: LISTING_FETCHED,
            payload: res.data
        })
    })
    .catch((err) => {
        console.log("Action: FAIL to getListing: ", err)
        dispatch({
            type: LISTING_FAILED_TO_FETCH,
            payload: err
        })
    })

}

export const login = (user) => (dispatch) => {

    console.log("Action creator Login: ", dispatch)

    dispatch( { type: LOGIN } )

    axiosWithAuth()
    .post("/login", user)
    .then((res) => {
        console.log("Action creator login POST successful: ", res.data)
        localStorage.setItem("token", res.data.payload)
    })
    .catch((err) => {
        console.log("Please register in order to log in", err.message)
    })
}

