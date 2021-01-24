import React, { useState } from 'react';
import config from '../../config';
import axios from 'axios';

const AddHomeForm = () => {



    //////STATE



    //img URL
    // const [homeImage, setHomeImage] = useState('');

    //HOME OBJECT TO BE SENT TO THE SERVER
    const [home, setHome] = useState({ address: '', imgURL: '' })

    //address
    // const [homeAddress, setHomeAddress] = useState({ value: '', touched: false });




    //Add a new home and send it to the DB
    const createNewHome = (ev) => {
        ev.preventDefault();
        axios.post(config.API_ENDPOINT + "/newHome", home)
    }



    //add url to the images array
    const addImageURL = (url) => {
        console.log(url.target.value)
        setHome({ ...home, imgURL: url.target.value })
    }

    //update home address value
    const addHomeAddress = (address) => {
        console.log(address.target.value);
        setHome({ ...home, address: address.target.value })
    }

    return (
        <div>
            <form onSubmit={ev => createNewHome(ev)}>
                <label htmlFor="address">Address</label>
                <input id="address" type="text" onChange={ev => addHomeAddress(ev)} /> <br />

                <label htmlFor="images">Add img url's</label>
                <input type="text" id="images" onChange={ev => addImageURL(ev)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddHomeForm
