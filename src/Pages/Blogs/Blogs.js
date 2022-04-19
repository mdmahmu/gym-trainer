import React from 'react';

const Blogs = () => {
    return (
        <div className="mx-5 my-4">

            <div className="mx-5">
                <h3>Question 1 : Difference between `authorization` and `authentication`?</h3>
                <p><b>Answer :</b>
                    <br />
                    1. Authentication is the process of indentifying someone. On the other hand, authorization is the process of verifying what specific applications, files, and data a user has access to.
                    <br />
                    2. Authentication usually  needs user’s login details. Authorization needs user’s privilege or security levels.
                    <br />
                    3. Authentication Verifies credentials. Authorization Grants or denies permissions.
                    <br />
                    4. User can partially change the authentication details. User cannot modify the Authorization permissions.
                    <br />
                    5. Authentication happened before the authorization process. It happened after successful authentication.

                </p>
            </div>

            <div className="mx-5">
                <h3>Question 2 : Why are you using `firebase`? What other options do you have to implement authentication?
                </h3>
                <p><b>Answer : </b> I am using firebase for authentication. Firebase Authentication saves my uncountable times since it allows to authenticates my app with the users. I have implemented several sign-in methods such as – google, email and password, github, facebook. I haven’t implemented game center, microsoft, play games, apple, twitter, yahoo. I will implement these sign-in methods as soon as possible. </p>
            </div>
            <div className="mx-5">
                <h3>Question 3 : What other services does `firebase` provide other than authentication?</h3>
                <p><b>Answer :</b>
                    <br />
                    1. Firebase Machine Learning Kit helps develop machine learning features for all platforms & devices.
                    <br />
                    2. Firebase comes up with the Firebase Real-time Database which is hosted on a cloud.
                    <br />
                    3. Firebase hosting also allows developers to host and deploy web app rapidly with a few commands.
                    <br />
                    4. Firebase Push Notification connects the servers and devices in such a way that receiving and sending the messages and notifications becomes quite easy and reliable.
                    <br />
                    5. Google Analytics is another major feature of google firebase.  It tracks and measures each user insights for all the devices- web, Android, and iOS.
                </p>
            </div>
        </div>
    );
};

export default Blogs;