import * as actions from "../actions";

const initialState = {

    listings: [
        {
            id: 1,
            city: "",
            room_type: "",
            security_deposit: 0, //float
            guests_included: 0, //int
            min_nights: 0, //int
            price: 0, 
        }

    ],
    user: {
        id: "",
        username: "",
        password: "",
        email: "",
        message: "",
        token: "",

        user: {
            username: "",
            id: ""
        }
    },
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
            listings: [{
                ...state.listings,
                id: action.payload.id
            }],
            isFetching: false
        }

        case actions.LOGIN_START:

        console.log("Login start: reducer")

        return {
            ...state,
            // user: action.payload,
            isFetching: true
        }

        case actions.LOGIN_SUCCESSFUL:

        console.log("Login successful: reducer")

            return {
                ...state,
                user: {
                    ...state.user,
                    message: action.payload.message,
                    token: action.payload.token,
                    user: {
                        username: action.payload.user.username,
                        id: action.payload.user.id
            },
            isFetching: false
        }}

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
                ...state.user,
                id: action.payload.id,
                username: action.payload.username,
                password: action.payload.password,
                email: action.payload.email
            },
            isFetching: false
        }

        default:
            return state

    }

}

