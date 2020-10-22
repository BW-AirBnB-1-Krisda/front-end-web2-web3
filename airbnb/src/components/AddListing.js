import React, { useState } from "react";
import { addListing, fetchOptimalPrice } from "../actions";
import { connect } from "react-redux";

import axios from "axios";

const initialAddListingForm = {
    id: "",
    city: "",
    room_type: "",
    security_deposit: 0, //float
    guests_included: 0, //int
    min_nights: 0, //int
    price: 0
}


const AddListing = (props) => {

const [newListing, setNewListing] = useState(initialAddListingForm)

const handleInputChange = (e) => {
    e.persist()
    setNewListing({
        ...newListing,
        [e.target.name] : e.target.value
    })
}

const submitNewListingForm = (e) => {
    e.preventDefault()
    props.fetchOptimalPrice(newListing, props.user.user.id, props.history)
    // props.addListing(props.listings, props.user.user.id, props.history)
    
}

return(
    <div>
        <form onSubmit={submitNewListingForm}>

            <input htmlFor="city"
            id="city"
            name="city"
            type="text"
            placeholder="City"
            value={newListing.city}
            onChange={handleInputChange}/>

            <input htmlFor="room_type"
            id="room_type"
            name="room_type"
            type="text"
            placeholder="Room Type"
            value={newListing.room_type}
            onChange={handleInputChange}/>

            <input htmlFor="security_deposit"
            id="security_deposit"
            name="security_deposit"
            type="float"
            placeholder="Security Deposit"
            value={newListing.security_deposit}
            onChange={handleInputChange}/>

            <input htmlFor="guests_included"
            id="guests_included"
            name="guests_included"
            type="number"
            placeholder="Number of guests included"
            value={newListing.guests_included}
            onChange={handleInputChange}/>

            <input htmlFor="min_nights"
            id="min_nights"
            name="min_nights"
            type="number"
            placeholder="Min. No. of nights"
            value={newListing.min_nights}
            onChange={handleInputChange}/>

            <button type="submit">Add a new listing</button>

        </form>

        {/* <button>Get optimal price</button> */}
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
    addListing,
    fetchOptimalPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)