import React, { useState, useEffect } from "react"
import { getListings } from "../actions";
import { connect } from "react-redux";
import ListingCard from "./ListingCard";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// import { useParams, useHistory } from "react-router-dom";

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

      const [city, setCity] = useState(["St. Louis"]);

    //   const history = useHistory();

    useEffect(() => {
        props.getListings(props.user.user.id, props.history)
    }, [listingsList] )

    const handleChange = (event) => {
        setCity(event.target.value);
      };

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
                    onChange={handleChange}
                    value={setCity}
                    />
                </div>
            </form>

            <div>
                <h1>Welcome {props.user.user.username}</h1>
            </div>

            {props.listings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
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