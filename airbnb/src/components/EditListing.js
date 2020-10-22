import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';

function EditListing(props) {
    const [listingData, setListingData] = useState({
        city: "",
        room_type: "",
        security_deposit: "",
        guests_included: 0,
        min_nights: 0,
        price: 0
    })
    const [city, setCity] = useState(["St. Louis"]);

    const handleChange = (event) => {
        setCity(event.target.value);
      };

      const submitRegisterForm = (e) => {
        e.preventDefault()
        props.editlisting(listingData, props.history)
        }
    console.log(listingData)

    return (
        <div>
            <form onSubmit={submitRegisterForm}>
                <div className="form-layout">
                <div className="form-input">
                    <label htmlFor="city">
                        City:
                    </label>
                    <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    value={setListingData.city}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="guests">
                        Number of Guests:
                    </label>
                    <input
                    id="guests"
                    type="number"
                    name="guests"
                    placeholder="Guests"
                    onChange={handleChange}
                    value={setListingData.guests_included}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="nights">
                        Min Number of Nights:
                    </label>
                    <input
                    id="nights"
                    type="number"
                    name="nights"
                    placeholder="Num of Nights"
                    onChange={handleChange}
                    value={setListingData.min_nights}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="price">
                        Price:
                    </label>
                    <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    value={setListingData.price}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="room">
                        Room Type:
                    </label>
                    <select>
                        <option value={setListingData.room_type}>King</option>
                        <option value={setListingData.room_type}>Two Queen</option>
                        <option value={setListingData.room_type}>Queen</option>
                    </select>
                </div>
                </div>
                <button className="topchill-button">
                    <div>
                        <EditIcon />    
                    </div>
                    <div>
                        Edit Listing
                    </div>
                </button>
            </form>
        </div>
    )
}

export default EditListing
