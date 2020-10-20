import React, { useState, useEffect } from "react"
import axios from "axios";
import Listing from "./Listing"

const Listings = (props) => {
    const [listingData, setListingData] = useState([]);
    const [city, setCity] = useState(["Chicago"]);
    console.log(city)

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
                return <Listing url={id} city={city} />
            })}

            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
        </div>

    )

}

export default Listings