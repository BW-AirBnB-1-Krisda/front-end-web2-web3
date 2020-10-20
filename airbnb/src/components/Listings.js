import React, { useState, useEffect } from "react"
import axios from "axios";
import Listing from "./Listing"

const Listings = (props) => {
    const [listingData, setListingData] = useState([
        {
          id: 0,
          city: "St. Louis",
          room_type: "King",
          security_deposit: "200",
          guests_included: 4,
          min_nights: 2,
          price: 700
        }
      ]);
    const [city, setCity] = useState(["St. Louis"]);
    console.log(listingData)

    const effectFn = () => {
        axios
        .get(``)
        .then((res) => setListingData(res));
    };
    useEffect(effectFn, [city]);

    const handleChange = (event) => {
        setCity(event.target.value);
      };
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
            {listingData.map((id) => {
                return <Listing 
                url={id} 
                city={city} 
                room_type={listingData[0].room_type} 
                security_deposit={listingData[0].security_deposit}
                guests_included={listingData[0].guests_included}
                min_nights={listingData[0].min_nights}
                price={listingData[0].price}
                />
            })}

{/* <a href="#" onClick={this.handleClick}></a> */}
            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
        </div>

    )

}

export default Listings