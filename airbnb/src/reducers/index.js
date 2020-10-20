import * as actions from "../actions";

const initialState = {

    id: "",
    listings: [
        // {
        //     id: 1,
        //     city: "New York",
        //     room_type: "Hotel Room",
        //     security_deposit: 100, //float
        //     guests_included: 2, //int
        //     min_nights: 2, //int
        //     // price: 100,
        // }
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

        case actions.ADD_LISTING_START:

        console.log("Add listing: reducer")

        return {
            ...state,
            listings: action.payload,
            isFetching: true
        }

        case actions.ADD_LISTING_SUCCESSFUL:

        console.log("Add listing successful: reducer")

        return {
            ...state,
            id: Date.now(),
            listings: [
                ...state.listings
            ],
            isFetching: false
        }

        case actions.LOGIN_START:

        console.log("Login start: reducer")

        return {
            ...state,
            user: action.payload,
            isFetching: true
        }

        case actions.LOGIN_SUCCESSFUL:

        console.log("Login successful: reducer")

            return {
                ...state,
                user: {
                    ...state.user
            },
            isFetching: false
        }

        case actions.REGISTER_START:

        console.log("Register start: reducer")

        return {
            ...state,
            user: action.payload,
            isFetching: true
        }

        case actions.REGISTER_SUCCESSFUL:

        console.log("Register successful: reducer")

        return {
            ...state,
            user: {
                ...state.user
            },
            isFetching: false
        }

        default:
            return state

    }

}

