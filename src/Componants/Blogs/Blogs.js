import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='card p-4'>
                <div className='row g-2'>
                    <h1>What Difference between authorization and authentication?</h1>
                    <div className="col-md-6 my-3">
                        <h4 className='text-center fw-bold'>Authentication:</h4>
                        <div className='my-2'>
                            <p>1. In authentication process, the identity of users are checked for providing the access to the system.</p><br />
                            <p>2. In authentication process, users or persons are verified.</p><br />
                            <p>3. It is done before the authorization process.</p><br />
                            <p>4. It needs usually user's login details.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-center fw-bold'>Authorization:</h4>
                        <div className='m-2'>
                            <p>1. While in authorization process, person's or user's authorities are checked for accessing the resources.</p><br />
                            <p>2. While in this process, users or persons are validated.</p> <br />
                            <p>3. While this process is done after the authentication process.</p>
                            <p>4. While it needs user's privilege or security levels.</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='card p-4'>
                <h1>Why are you using firebase?</h1>
                <div className="my-2">
                    <p>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too</p>
                </div>
                <h1>What other options do you have to implement authentication?</h1>
                <div className='my-2'>
                    <li>Biometrics</li>
                    <li>Token Authentication</li>
                    <li>Transaction Authentication</li>
                    <li>Multi-Factor Authentication (MFA)</li>
                    <li>Out-of-Band Authentication (OOB)</li>
                </div>
            </div>
            <div className="card p-4">
                <h1>What other services does `firebase` provide other than authentication?</h1>
                <div className='my-2'>
                    <li>Back4App</li>
                    <li>Parse</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Supabase</li>
                    <li>appwrite</li>
                    <li>Hasura</li>
                    <li>Deployd</li>
                </div>
            </div>
        </div>
    );
};

export default Blogs;