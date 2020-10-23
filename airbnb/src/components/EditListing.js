import React, { useState, useEffect } from "react";
import { editListingAction, getListings } from "../actions";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

import EditIcon from "@material-ui/icons/Edit";

const initialEditListingForm = {
  // id: "",
  city: "",
  room_type: "",
  security_deposit: 0, //float
  guests_included: 0, //int
  min_nights: 0, //int
  price: 0,
};

const EditListing = (props) => {
  const [editListing, setEditListing] = useState(initialEditListingForm);

  const { id } = useParams();

  // useEffect(() => {
  //   props.getListings(props.listing.id, props.history);
  // }, [props.id]);

  const handleInputChange = (e) => {
    e.persist();
    setEditListing({
      ...editListing,
      [e.target.name]: e.target.value,
    });
  };

  // console.log("USER ID EDITLISTING: ", props.listings.user_id)

  const submitEditListingForm = (e) => {
    e.preventDefault();
    props.editListingAction(id, editListing, props.history)
    // props.getListings(props.id, props.history)
    
  };

  return (
    <div>
      <form onSubmit={submitEditListingForm}>
        <div className="form-layout">
          <div className="form-input">
            <label htmlFor="city">City:</label>
            <input
              htmlFor="city"
              id="city"
              name="city"
              type="text"
              placeholder="City"
              value={editListing.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="guests">Number of Guests:</label>
            <input
              htmlFor="guests_included"
              id="guests_included"
              name="guests_included"
              type="number"
              placeholder="Number of guests included"
              value={editListing.guests_included}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-input">
            <label htmlFor="nights">Min Number of Nights:</label>
            <input
              htmlFor="min_nights"
              id="min_nights"
              name="min_nights"
              type="number"
              placeholder="Min. No. of nights"
              value={editListing.min_nights}
              onChange={handleInputChange}
            />
          </div>

          {/* <div className="form-input">
            <label htmlFor="price">Price:</label>
            <input
              htmlFor="price"
              id="price"
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleInputChange}
              value={editListing.price}
            />
          </div> */}

          <div className="form-input">
            <label htmlFor="room">Room Type:</label>
            <select
              htmlFor="room_type"
              id="room_type"
              name="room_type"
              type="text"
              placeholder="Room Type"
              onChange={handleInputChange}
            >
              <option value={editListing.room_type}>King</option>
              <option value={editListing.room_type}>Two Queen</option>
              <option value={editListing.room_type}>Queen</option>
            </select>
          </div>
        </div>

        <div className="form-input">
          <label htmlFor="security_deposit">Security Deposit:</label>
          <input
            htmlFor="security_deposit"
            id="security_deposit"
            name="security_deposit"
            type="float"
            placeholder="Security Deposit"
            value={editListing.security_deposit}
            onChange={handleInputChange}
          />
        </div>

        {/* <input
          htmlFor="room_type"
          id="room_type"
          name="room_type"
          type="text"
          placeholder="Room Type"
          value={editListing.room_type}
          onChange={handleInputChange}
        /> */}

        <button className="topchill-button" type="submit">
          <div>
            <EditIcon />
          </div>
          <div>Edit Listing</div>
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapDispatchToProps = {
  editListingAction,
  getListings
};

export default connect(mapStateToProps, mapDispatchToProps)(EditListing);
