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
        },
        {
            id: 1,
            city: "Chicago",
            room_type: "Queen",
            security_deposit: "400",
            guests_included: 4,
            min_nights: 3,
            price: 900
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
            {listingData.map((list) => {
                console.log("This is", list)
                return <Listing 
                url={list} 
                id={list.id}
                city={list.city} 
                room_type={list.room_type} 
                security_deposit={list.security_deposit}
                guests_included={list.guests_included}
                min_nights={list.min_nights}
                price={list.price}
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