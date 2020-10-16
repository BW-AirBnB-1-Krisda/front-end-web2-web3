import React from "react"

const Listings = (props) => {

    return (
        <div>

{/* <a href="#" onClick={this.handleClick}></a> */}
            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
            <h1>Listings go here with the functionality to get all the listings, add a new listing, edit an existing listing and get the optimal price for the listing, and delete the listing</h1>
            
        </div>

    )

}

export default Listings