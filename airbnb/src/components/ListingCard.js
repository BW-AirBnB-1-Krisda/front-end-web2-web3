import React from "react"

import { deleteListing, getListings } from "../actions";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';

const ListingCard = (props) => {

    const history = useHistory();

     const deleteOnListings = (id) => {
        const newListingArray = props.listings.filter((item) => item.id !== id)
        props.setListingsList(newListingArray)
    }

    console.log("Listing ID to delete: ", props.listing.id)
    
    const deleteListingCard = (e) => {
        e.preventDefault()
        deleteOnListings(props.listing.id) 
        props.deleteListing(props.listing.id)
        props.getListings(props.listing.user_id)
        history.push(`/listings/user/${props.user.user.id}`)
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
                <li>OPTI Price: ${Math.round(props.listing.price)}</li>
            </ul>
        </div>

        <div className="buttons">
        <button className="topchill-button" onClick={() => history.push(`/listings/${props.listing.id}`)}>
            <div className="control">
                <ControlPointIcon color="white" />
            </div>
            <div>
                Update
            </div>
        </button>

        <button className="topchill-button" onClick={deleteListingCard}>
            <div className="control">
                <DeleteIcon color="white" />
            </div>
            <div>
                Delete
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
    deleteListing,
    getListings
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingCard)

// export default ListingCard