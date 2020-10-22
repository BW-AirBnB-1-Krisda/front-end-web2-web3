import React, { useState, useEffect } from "react"
import { getListings, deleteListing } from "../actions";
import { connect } from "react-redux";
import ListingCard from "./ListingCard";

import { useParams } from "react-router-dom";

const Listings = (props) => {

    const [listingsList, setListingsList] = useState([])

    const { id } = useParams();

    useEffect(() => {
        props.getListings(id, props.history)
    }, [listingsList] )

    if (!listingsList) {
        return <div>Loading listing list...</div>}

        console.log("LISTING LIST: ", props.listings)

    return (
        <div>

            <div>
                <h1>Welcome {props.user.user.username}</h1>
            </div>

            {props.listings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
            ))}

            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
         
            <button onClick={() => props.history.push("/add-listing")}>Add new listing</button>

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