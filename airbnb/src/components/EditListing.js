import React, { useState, useEffect } from "react";
import { editListingAction } from "../actions";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";

const initialEditListingForm = {
  id: "",
  city: "",
  room_type: "",
  security_deposit: 0, //float
  guests_included: 0, //int
  min_nights: 0, //int
  // price: 0
};

const EditListing = (props) => {

  const [editListing, setEditListing] = useState(initialEditListingForm);

  const { id } = useParams();

  useEffect(() => {
    props.getListingCard(props.id);
  }, [props.id]);

  const handleInputChange = (e) => {
    e.persist();
    setEditListing({
      ...editListing,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditListingForm = (e) => {
    e.preventDefault();
    props.editListingAction(editListing, id, props.history);
  };

  return (
    <div>
      <form onSubmit={submitEditListingForm}>
        <input
          htmlFor="city"
          id="city"
          name="city"
          type="text"
          placeholder="City"
          value={editListing.city}
          onChange={handleInputChange}
        />

        <input
          htmlFor="room_type"
          id="room_type"
          name="room_type"
          type="text"
          placeholder="Room Type"
          value={editListing.room_type}
          onChange={handleInputChange}
        />

        <input
          htmlFor="security_deposit"
          id="security_deposit"
          name="security_deposit"
          type="float"
          placeholder="Security Deposit"
          value={editListing.security_deposit}
          onChange={handleInputChange}
        />

        <input
          htmlFor="guests_included"
          id="guests_included"
          name="guests_included"
          type="number"
          placeholder="Number of guests included"
          value={editListing.guests_included}
          onChange={handleInputChange}
        />

        <input
          htmlFor="min_nights"
          id="min_nights"
          name="min_nights"
          type="number"
          placeholder="Min. No. of nights"
          value={editListing.min_nights}
          onChange={handleInputChange}
        />

        <button type="submit">Edit listing</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        listings: state.listings,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
}

const mapDispatchToProps = {
    editListingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(EditListing)
