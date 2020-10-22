import React from "react"

import { deleteListing } from "../actions";
import { connect } from "react-redux";

const ListingCard = (props) => {

    console.log("LISTINGS EDIT: ", props.listing.id)

    const deleteListingCard = (e) => {
        e.preventDefault()
        props.deleteListing(props.listing.id, props.history, props.id)
    }

    return (
        <div>
            <h2>Listing card</h2>

            <p>City: {props.listing.city}</p>
            <p>Room type: {props.listing.room_type}</p>
            <p>Security deposit: {props.listing.security_deposit}</p>
            <p>Guests included: {props.listing.guests_included}</p>
            <p>Min. no. of nights: {props.listing.min_nights}</p>
            {/* <p>OPTIMAL Price: {props.listing.price}</p> */}

            <button onClick={() => props.history.push(`/listings/${props.user.user.id}`)}>Edit Listing</button>
            <button onClick={deleteListingCard}>Delete Listing</button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {
    deleteListing
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCard)