import * as actions from "../actions";

const initialState = {

    listings: [
        {
            id: 1,
            city: "New York",
            room_type: "Hotel Room",
            security_deposit: 100, //float
            guests_included: 2, //int
            min_nights: 2, //int
            // price: 100,
        }
    ],
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

        const newListing = {
            id: Date.now(),
            city: action.payload.city,
            room_type: action.payload.room_type,
            security_deposit: action.payload.security_deposit, 
            guests_included: action.payload.guests_included,
            min_nights: action.payload.min_nights,
            // price: ,
        }

        return {
            ...state,
            listings: [
                ...state.listings,
                newListing
            ]
        }

        case actions.LOGIN_START:

        console.log("Login start: reducer")

        return {
            ...state,
            isFetching: true,
            user: action.payload
        }

        case actions.LOGIN_SUCCESSFUL:

        console.log("Login successful: reducer")

            return {
                ...state,
                isFetching: false,
                user: {
                    ...state.user
            }
        }

        case actions.REGISTER_START:

        console.log("Register start: reducer")

        return {
            ...state,
            isFetching: true,
            user: action.payload
        }

        case actions.REGISTER_SUCCESSFUL:

        console.log("Register successful: reducer")

        return {
            ...state,
            isFetching: false,
            user: {
                ...state.user
            }
        }

        default:
            return state

    }

}

