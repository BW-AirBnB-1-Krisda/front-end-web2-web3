import React, { useState, useEffect } from "react"
import { getListings, deleteListing } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListingCard from "./ListingCard";

const Listings = (props) => {

    const [listingsList, setListingsList] = useState([])

    useEffect(() => {
        props.getListings(listingsList)
    }, [listingsList] )

    if (!listingsList) {
        return <div>Loading listing list...</div>
    }

    return (
        <div>

            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
            {/* <h1>Listings go here with the functionality to get all the listings, add a new listing, edit an existing listing and get the optimal price for the listing, and delete the listing</h1> */}
            <button onClick={() => props.history.push("/add-listing")}>Add new listing</button>

            {listingsList.map(listing => (
                <Link key={listing.id} to={`/listings/${listing.id}`}>
                    <ListingCard listing={listing}/>
                    <button onClick={deleteListing}>Delete listing</button>
                    <button onClick={() => props.history.push(`/edit-listing/${listing.id}`)}>Edit listing</button>
                </Link>
            ))}
          
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
    getListings,
    deleteListing
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)