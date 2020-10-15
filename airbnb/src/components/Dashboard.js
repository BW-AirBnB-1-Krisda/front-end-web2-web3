import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../util/axiosWithAuth"

const Dashboard = () => {

    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetchListings()
    }, [])

    return (
        <div>
            <h1>Listings go here with the functionality to get all the listings, add a new listing, edit an existing listing and get the optimal price for the listing, and delete the listing</h1>
        </div>

    )

}

export default Dashboard