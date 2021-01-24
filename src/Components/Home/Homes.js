import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homes.css';
import { Link } from 'react-router-dom';

const Homes = () => {

    //All homes retreived from the server
    const [homes, setHomes] = useState([]);

    //gettAllHomes at component mount
    useEffect(() => {
        getAllHomes();
    }, [])


    //get all homes from the server
    const getAllHomes = () => {
        // axios.get(config.API_ENDPOINT + "/allHomes")
        axios.get("https://jville-server.herokuapp.com/")
            .then(res => {
                console.log(res.data);
                setHomes(res.data);
            })
    }

    return (
        <div className="homes">
            <ul>
                {homes.map((home, key) => {
                    return <li key={key}>
                        <h3>Address: {home.address}</h3>
                        <img alt="home" src={home.imgURL} />
                    </li>
                })}
            </ul>

            <Link to="/addHomeForm">Add New Home</Link>
        </div>
    )
}

export default Homes
