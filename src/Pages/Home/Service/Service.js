import React from 'react';
import { Button, Col } from "react-bootstrap";

const Service = ({ service }) => {
    const { service_type, cost, features } = service;
    return (
        <Col className="my-sm-3 my-md-3 my-3 col-12 col-md-6 col-lg-4">
            <div className="card border-4">
                <div className="card-body px-5">
                    <h3>{service_type}</h3>
                    <h4>${cost} /<small>person</small></h4>
                    <div className="my-3">
                        {
                            features.map(feature => <li>{feature}</li>)
                        }
                    </div>
                    <Button variant="secondary" className="px-4">Book Now</Button>
                </div>
            </div>
        </Col>
    );
};

export default Service;