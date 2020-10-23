import axios from "axios"

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem("token")

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";

    return axios
    .create({
        baseURL: 
        // proxyurl + 
        "https://top-chill.herokuapp.com/api",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

// https://cors-anywhere.herokuapp.com/http://example.com