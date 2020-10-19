import React, { useState, useEffect } from "react"
import axios from "axios";
import Listing from "./Listing"

const Listings = (props) => {

    return (
        <div>

{/* <a href="#" onClick={this.handleClick}></a> */}
            <a
            href="/login"
            onClick={() => window.localStorage.clear()} 
            >
            Log out</a>
            <Listing />
        </div>

    )

}

export default Listings