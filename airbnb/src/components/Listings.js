import React, { useState, useEffect } from "react"
import { getListings } from "../actions";
import { connect } from "react-redux";
import ListingCard from "./ListingCard";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// import { useHistory } from "react-router-dom";

import ControlPointIcon from '@material-ui/icons/ControlPoint';

const Listings = (props) => {

    const [listingsList, setListingsList] = useState([ {
        id: 0,
        city: "St. Louis",
        room_type: "King",
        security_deposit: "200",
        guests_included: 4,
        min_nights: 2,
        price: 700
      },
      {
          id: 1,
          city: "Chicago",
          room_type: "Queen",
          security_deposit: "400",
          guests_included: 4,
          min_nights: 3,
          price: 900
      }])

    //   const [city, setCity] = useState(["St. Louis"]);

    //   const history = useHistory();

    useEffect(() => {
        props.getListings(props.user.user.id)
        // history.push(`/listings/user/${props.user.user.id}`)
        
    }, [listingsList] )

    // const handleChange = (event) => {
    //     setCity(event.target.value);
    //   };

    if (!listingsList) {
        return <div>Loading listing list...</div>}

        console.log("LISTING LIST: ", props.listings)

    return (
        <div>
            <form>
                <div className="search">
                <label htmlFor="city">Search:</label>
                <input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    // onChange={handleChange}
                    // value={setCity}
                    />
                </div>
            </form>

            <div>
                <h1>Welcome {props.user.user.username}</h1>
            </div>

            <div className="listing">
        <h1>$900</h1>
            <img src="https://a0.muscache.com/im/pictures/b0c6aa89-c43e-424b-89f0-34b27b840a9c.jpg?im_w=1200" alt="airbnb"></img>
        <div className="attributes">

        <ul>
                <li>City: St. Louis</li>
                <li>Room Type: King</li>
                <li>Security Deposit: $400</li>
                <li>Max Guests: 4</li>
                <li>Min Number of Nights: 2</li>
                <li>Optimal Price: $700</li>
            </ul>
        </div>
        </div>

        <div className="listing">
        <h1>$400</h1>
            <img src="https://a0.muscache.com/im/pictures/b0c6aa89-c43e-424b-89f0-34b27b840a9c.jpg?im_w=1200" alt="airbnb"></img>
        <div className="attributes">

        <ul>
                <li>City: Chicago</li>
                <li>Room Type: Queen</li>
                <li>Security Deposit: $200</li>
                <li>Max Guests: 4</li>
                <li>Min Number of Nights: 3</li>
                <li>Optimal Price: $400</li>
            </ul>
        </div>
        </div>

            {props.listings.length > 0 && 
            props.listings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} setListingsList={setListingsList} />
            ))}
                                <div>
            <button className="add-buttons" onClick={() => props.history.push("/add-listing")} >
                    <div className="control">
                        <ControlPointIcon color="white" />
                    </div>
                    <div>
                    Add New Listing
                    </div>
                </button>
            </div>
            <div className="logout-buttons">
                <button className="topchill-button" startIcon>
                    <a
                        href="/login"
                        onClick={() => window.localStorage.clear()} 
                    >
                    <div className="control">
                        <ArrowDownwardIcon color="white" />
                    </div>
                    <div>
                        Log Out
                    </div>
                    </a>
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
    getListings,
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)