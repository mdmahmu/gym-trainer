import React from 'react';
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import googleLogo from "../../../../Images/google.ico";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/');
    }

    return (
        <div className="m-4">
            <div className="d-flex justify-content-center">
                <hr className="w-25" />
                <p className="ms-3 me-3 bold">OR</p>
                <hr className="w-25" />
            </div>
            <div className="d-flex justify-content-center">
                <Button variant="outline-dark" onClick={() => signInWithGoogle()}> <img src={googleLogo} alt="google logo" /> Sign In With Google</Button>
            </div>

        </div>
    );
};

export default GoogleLogin;