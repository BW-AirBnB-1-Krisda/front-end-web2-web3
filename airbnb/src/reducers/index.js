import * as actions from "../actions";

const initialState = {
  listings: [
    {
      id: "",
      city: "",
      room_type: "",
      security_deposit: 0, //float
      guests_included: 0, //int
      min_nights: 0, //int
      price: 0,
      user_id: ""
    },
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
      id: "",
    },
  },
  isFetching: "",
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {


    //REGISTER

    case actions.REGISTER_START:
      console.log("Register start: reducer");

      return {
        ...state,
        user: action.payload,
        isFetching: true,
      };

    case actions.REGISTER_SUCCESSFUL:
      console.log("Register successful: reducer");

      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          username: action.payload.username,
          password: action.payload.password,
          email: action.payload.email,
        },
        isFetching: false,
      };

    //LOGIN

    case actions.LOGIN_START:
      console.log("Login start: reducer");

      return {
        ...state,
        // user: action.payload,
        isFetching: true,
      };

    case actions.LOGIN_SUCCESSFUL:
      console.log("Login successful: reducer");

      return {
        ...state,
        user: {
          ...state.user,
          message: action.payload.message,
          token: action.payload.token,
          user: {
            username: action.payload.user.username,
            id: action.payload.user.id,
          },
          isFetching: false,
        },
      };


      //GET USER LISTINGS

    case actions.LISTING_PROCESSING:
      console.log("Fetching listing");

      return {
        ...state,
        isFetching: true,
      };

    case actions.LISTING_FETCHED:
      console.log("Fetched listing");

      return {
        ...state,
        listings: action.payload,
        isFetching: false,
      };

    case actions.LISTING_FAILED_TO_FETCH:
      console.log("Failed to fetch listing: reducer: ");

      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

//FETCH OPTIMAL PRICE

case actions.FETCH_OPTIMAL_PRICE_START:
  console.log("FETCH OPTIMAL PRICE: reducer");

  return {
    ...state,
    listings: action.payload,
    isFetching: true,
  };


  case actions.FETCH_OPTIMAL_PRICE_SUCCESSFUL:
    console.log("Fetch optimal price successful: reducer");

    return {
      ...state,
      listings: action.payload
              // id: action.payload.id,
          // city: action.payload.city,
          // room_type: action.payload.room_type,
          // security_deposit: action.payload.security_deposit, 
          // guests_included: action.payload.guests_included, 
          // min_nights: action.payload.min_nights, 
          // price: action.payload.price,
          // user_id: action.payload.user_id

        ,
        
  
      isFetching: false,
    };



      //ADD LISTING

    case actions.ADD_LISTING_START:
      console.log("Add listing: reducer");

      return {
        ...state,
        listings: action.payload,
        isFetching: true,
      };

    case actions.ADD_LISTING_SUCCESSFUL:
      console.log("Add listing successful: reducer");

      return {
        ...state,
        listings: [
          {
            ...state.listings,
            // listings: action.payload,
                id: action.payload.id,
            city: action.payload.city,
            room_type: action.payload.room_type,
            security_deposit: action.payload.security_deposit, 
            guests_included: action.payload.guests_included, 
            min_nights: action.payload.min_nights, 
            price: action.payload.price,
            user_id: action.payload.user_id

          }],
          
    
        isFetching: false,
      };

      //EDIT LISTING

      case actions.EDIT_LISTING_START:
          console.log("Edit listing start: reducer")

          return {
              ...state,
              listings: action.payload,
              isFetching: true
          }

        case actions.EDIT_LISTING_SUCCESSFUL:
            console.log("Edit listing successful: reducer")

            return {
                ...state,
                listings: [
                    {
                      ...state.listings,
                      id: action.payload.id,
                      city: action.payload.city,
                      room_type: action.payload.room_type,
                      security_deposit: action.payload.security_deposit, 
                      guests_included: action.payload.guests_included, 
                      min_nights: action.payload.min_nights, 
                      price: action.payload.price,
                      user_id: action.payload.user_id
                    }
                ],
                isFetching: false,

            }

    default:
      return state;
  }
};
