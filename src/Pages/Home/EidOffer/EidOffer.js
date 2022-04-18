import React from 'react';
import { Button } from "react-bootstrap";
import eid_offer from '../../../Images/eid_offer.png';

const EidOffer = () => {

    return (
        <div>
            <h1 className="text-danger text-center mt-4 mb-2">Eid Offer</h1>
            <div className="container card">
                <div className="row d-flex flex-md-row flex-sm-column flex-column align-items-center mx-4 mx-4">
                    <div className=" col-md-6 col-sm-12 col-12 ">
                        <img src={eid_offer} alt="discount img" className="img-fluid rounded p-2" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-12 px-sm-0 px-3">
                        <h2 className="mt-2">Book now and</h2>
                        <h2 className="mb-4">get 15% discount</h2>
                        <p>In this Eid festival, don't forget to stay fit.</p>
                        <p>To get 15% discount, click the button below</p>
                        <Button variant="secondary" className="my-3">Click here to book</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EidOffer;