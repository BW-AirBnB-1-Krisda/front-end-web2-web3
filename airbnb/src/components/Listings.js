import { React, useState } from "react"
import "../App.css";

function Listings(props) {

    const [userRegister, setUserRegister] = useState({
        username: "",
        password: "",
        email: "",
        terms: ""
    })
    return (
        <div>
            <div className="listing">
                <h1>Listing</h1>
            </div>

            <a
                href="/login"
                onClick={() => window.localStorage.clear()}
            >
                           Log out</a>

        </div>

    )

}

export default Listings