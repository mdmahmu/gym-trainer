import React from 'react';
import Banner from "../Banner/Banner";
import EidOffer from "../EidOffer/EidOffer";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <EidOffer></EidOffer>
        </div>
    );
};

export default Home;