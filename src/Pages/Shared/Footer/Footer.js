import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center mt-4">
            <p className="mb-0 p-3">&copy; Copyright {new Date().getFullYear()} - Gym Trainer - All rights reserved</p>
        </footer>
    );
};

export default Footer;