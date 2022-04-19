import React from 'react';
import { Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
    const { img, service_type, cost, features } = service;
    return (
        <Col className="my-sm-3 my-md-3 my-3 col-12 col-md-6 col-lg-4">
            <div className="card border-4">
                <div className="card-body px-5">
                    <img src={img} alt="private training" className="w-100 mb-2" />
                    <h3>{service_type}</h3>
                    <h4>${cost} /<small>person</small></h4>
                    <div className="my-3">
                        {
                            features.map(feature => <li>{feature}</li>)
                        }
                    </div>
                    <Button variant="info" as={NavLink} to='/checkout' className="px-4">Book Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default Service;