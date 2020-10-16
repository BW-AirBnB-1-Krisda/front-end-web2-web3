import { axiosWithAuth } from "../util/axiosWithAuth"

export const GET_LISTINGS = "GET_LISTINGS"
export const ADD_LISTING = "ADD_LISTING"
export const DELETE_LISTING = "DELETE_LISTING"
export const EDIT_LISTING = "EDIT_LISTING"

export const LISTING_PROCESSING = "LISTING_PROCESSING"
export const LISTING_FETCHED = "LISTING_FETCHED"
export const LISTING_FAILED_TO_FETCH = "LISTING_FAILED_TO_FETCH"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL"

export const REGISTER_START = "REGISTER_START"
export const REGISTER_SUCCESSFUL = "REGISTER_SUCCESSFUL"

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
            payload: err.message
        })
    })

}

export const login = (user, history) => (dispatch) => {

    console.log("Action creator login: ", dispatch)

    dispatch( { type: LOGIN_START } )

    axiosWithAuth()
    .post("/login", user)
    .then((res) => {
        console.log("Action creator login POST: ", res.data)
        localStorage.setItem("token", res.data.token)
    
        dispatch({ 
            type: LOGIN_SUCCESSFUL,
            payload: res.data
        })

        history.push("/listings")
    })
    .catch((err) => {
        console.log("Please register in order to log in", err.message)
    })
}

export const register = (user, history) => (dispatch) => {

    console.log("Action creator register: ", dispatch)

    dispatch ( { type: REGISTER_START } )

    axiosWithAuth()
    .post("/register", user)
    .then((res) => {
        console.log("Action creator register POST: ", res.data)
        localStorage.setItem("token", res.data.token)

        dispatch({
            type: REGISTER_SUCCESSFUL,
            payload: res.data
        })

        history.push("/login")
    })
    .catch((err) => {
        console.log("Register NOT successful", err.message)
    })
}

