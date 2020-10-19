import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
// import { useParams } from "react-router-dom";
import { getListingCard, deleteListing } from "../actions";
import { connect } from "react-redux";

const Listing = (props) => {
    
    const [listing, setListing] = useState(null)

    // const { id } = useParams()

    useEffect(() => {
        getListingCard(props.id)
    }, [props.id] )

    if (!listing) {
        return <div>Loading listing details...</div>
    }
    
    return (
        <div>
            <ListingCard listing={listing} />
            <button onClick={deleteListing}>Delete listing</button>
            <button>Edit listing</button>
            <button>Get optimal price for this listing</button>
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
    getListingCard,
    deleteListing
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing)