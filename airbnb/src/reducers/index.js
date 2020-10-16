import * as actions from "../actions";

const initialState = {

    listings: [],
    user: {},
    isFetching: "",
    error: ""
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.LISTING_PROCESSING:

        console.log("Fetching listing")

        return {
            ...state,
            isFetching: true
        }

        case actions.LISTING_FETCHED:

        console.log("Fetched listing")

        return {
            ...state,
            listings: action.payload,
            isFetching: false 
        }

        case actions.LISTING_FAILED_TO_FETCH:

        console.log("Failed to fetch listing: reducer: ")

        return {
            ...state,
            error: action.payload,
            isFetching: false
        }

        case actions.ADD_LISTING:

        console.log("Add listing: reducer")

        return {
            ...state,
            listings: [
                ...state.listings,
                action.payload
            ]
        }

        case actions.LOGIN_START:

        console.log("Login: reducer")

        return {
            ...state,
            isFetching: true,
            user: action.payload
        }

        case actions.LOGIN_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                user: {
                    ...state.user
            }}

        default:
            return state

    }

}

