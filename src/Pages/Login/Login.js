import React, { useRef } from 'react';
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import GoogleLogin from "../Shared/SocialLogin/GoogleLogin/GoogleLogin";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');


    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth
    );

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const handleResetPassword = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your email first');
        }
    };

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="w-50 mx-auto my-4">
            <h1 className="text-center text-danger">Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="info" type="submit" className="px-4">Login</Button>
            </Form>
            <br />
            <p>Forgot password ?<Button variant="link" className="text-decoration-none text-danger" onClick={handleResetPassword}>Click here to reset</Button></p>
            <p>New to GYM TRAINER ? <NavLink to='/register' className="text-danger text-decoration-none" >Create an account</NavLink></p>
            <ToastContainer />

            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Login;