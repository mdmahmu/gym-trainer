import React, { useRef, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from "../Shared/SocialLogin/GoogleLogin/GoogleLogin";


const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
            if (error) {
                alert(error.message);
            } else {
                navigate('/');
            }
        }
        else {
            toast('Error. Both password did not match.');
        }
    };

    return (
        <div className="w-50 mx-auto my-4">
            <h1 className="text-center text-danger">Registration</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="I agree to the terms and conditions." />
                </Form.Group>
                {
                    <Button variant={!agree ? "light" : "info"} type="submit" className="px-3" disabled={!agree}>Register</Button>
                }
            </Form>
            <br />
            <p>Already registered ? <NavLink to='/login' className="text-danger text-decoration-none" >Login</NavLink></p>
            <ToastContainer />
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;