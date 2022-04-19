import React from 'react';

const Checkout = () => {
    return (
        <div className="w-50 mx-auto">
            <h1 className="text-center my-4">Checkout page</h1>
            <div>
                <textarea placeholder="Enter address" name="address" id="address-field" cols="60" rows="8"></textarea>
                <br />
            </div>
            <button> Go to payment page</button>
        </div>
    );
};

export default Checkout;