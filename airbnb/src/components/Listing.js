import React from 'react'

const Listing = (props) => {

    return (
        <div className="listing" key={props.key}>
        <h1>City</h1>
        <ul>
            <li>Room Type:</li>
            <li>Security Deposit:</li>
            <li>Max Guests:</li>
            <li>Min Number of Nights:</li>
            <li>Price:</li>
        </ul>
        <img src="https://a0.muscache.com/im/pictures/b0c6aa89-c43e-424b-89f0-34b27b840a9c.jpg?im_w=1200" alt="airbnb"></img>
        </div>
    )
}

export default Listing
