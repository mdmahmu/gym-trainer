import React, { useEffect, useState } from 'react';
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className="mx-5">
            <h1 className="text-center text-danger mt-5 mb-0">Services</h1>
            <Container >
                <Row>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;