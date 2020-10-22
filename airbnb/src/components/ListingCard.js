import React from "react"

import { deleteListing } from "../actions";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';

const ListingCard = (props) => {

    const history = useHistory();

    console.log("LISTINGS EDIT: ", props.listing.id)

    const deleteListingCard = (e) => {
        e.preventDefault()
        props.deleteListing(props.listing.id, props.history, props.id)
    }

    return (
        <div className="listing">
        <h1>{props.city}</h1>
            <img src="https://a0.muscache.com/im/pictures/b0c6aa89-c43e-424b-89f0-34b27b840a9c.jpg?im_w=1200" alt="airbnb"></img>
        <div className="attributes">

        <ul>
                <li>City: {props.listing.city}</li>
                <li>Room Type: {props.listing.room_type}</li>
                <li>Security Deposit: ${props.listing.security_deposit}</li>
                <li>Max Guests: {props.listing.guests_included}</li>
                <li>Min Number of Nights: {props.listing.min_nights}</li>
                {/* <li>OPTI Price: ${props.listing.price}</li> */}
            </ul>
        </div>

        <div className="buttons">

        <button className="topchill-button" onClick={() => history.push(`/listings/${props.listing.id}`)}>
            <div className="control">
                <ControlPointIcon color="white" />
            </div>
            <div>
                Edit Listing
            </div>
        </button>

        <button className="topchill-button" onClick={deleteListingCard}>>
            <div className="control">
                <DeleteIcon color="white" />
            </div>
            <div>
                Delete Listing
            </div>
        </button>
        </div>
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