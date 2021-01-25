import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homes.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

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
        <div>
            {
                homes.map((home, key) => {
                    return (
                        <Container key={key} className="miniBio">
                            <Row className="miniBio-container">
                                <Col><h3>Address: {home.address}</h3></Col>
                                <Col><Image className="bioMiniThumbnail" alt="home" src={home.imgURL} /></Col>
                            </Row>
                        </Container>
                    )
                })
            }
            <Link to="/addHomeForm"><b>Add New Home</b></Link >
        </div>
    )
}

export default Homes
