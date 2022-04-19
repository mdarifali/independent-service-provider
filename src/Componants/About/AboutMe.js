import React from 'react';
import profileimg from '../Images/Arif.jpg'

const AboutMe = () => {
    return (
        <div className='container my-5'>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img
                            src={profileimg}
                            alt="Trendy Pants and Shoes"
                            class="img-fluid rounded-start"
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body p-5">
                            <h1 class="card-title lh-lg text-danger fw-bolder">I'm Arif Ali <br />
                                <span className='text-success'>Front-end Developer</span></h1>
                            <h5 class="card-text mt-4">
                                I am the master of HTML, CSS and Javascript. I know everything needed to make a website function,
                                efficient. I didn't stop with the web. I went beyond with most popular Javascript framework called
                                Vue JS. I even know the deployment, server and security. I will give you 100% web solution.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;