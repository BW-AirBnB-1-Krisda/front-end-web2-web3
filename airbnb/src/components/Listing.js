import React, { useState } from 'react'
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';

const Listing = (props) => {
    const [listData, setListData] = useState([]);

    function addNewListing() {
        const newlisting = {
            id: props.id,
            room_type: props.room_type,
            city: props.city,
            guests_included: props.guests_included,
            min_nights: props.min_nights,
            price: props.price
        };
        setListData([...listData, newlisting]);
    }
    
    console.log(listData)
    return (
        <div className="listing">
        <h1>{props.city}</h1>
            <img src="https://a0.muscache.com/im/pictures/b0c6aa89-c43e-424b-89f0-34b27b840a9c.jpg?im_w=1200" alt="airbnb"></img>
        <div className="attributes">
            <ul>
                <li>Room Type: {props.room_type}</li>
                <li>Security Deposit: ${props.security_deposit}</li>
                <li>Max Guests: {props.guests_included}</li>
                <li>Min Number of Nights: {props.min_nights}</li>
                <li>Price: ${props.price}</li>
            </ul>
        </div>
        <div className="buttons">
        <button className="addbutton" onClick={() => addNewListing()}>
            <div className="control">
                <ControlPointIcon color="white" />
            </div>
            <div>
                Add Listing
            </div>
        </button>
        <button className="deletebutton">
            <div className="control">
                <DeleteIcon color="white" />
            </div>
            <div>
                Delete Listing
            </div>
        </button>
        </div>
        </div>
    )
}

export default Listing