import React from "react"

const ListingCard = (props) => {

    return (
        <div>
            <p>Listing card</p>
            <p>City: {props.listing.city}</p>
            <p>Room type: {props.listing.room_type}</p>
            <p>Security deposit: {props.listing.security_deposit}</p>
            <p>Guests included: {props.listing.guests_included}</p>
            <p>Min. no. of nights: {props.listing.min_nights}</p>

        </div>
    )
}

export default ListingCard