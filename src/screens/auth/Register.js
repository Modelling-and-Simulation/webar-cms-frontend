import React from 'react';
import Container from "@mui/material/Container";

const Register = () => {
    return (
        // <Container >
            <div className='register-container'>
                <div className='register-left'>
                    <h3>Welcome to Web AR!</h3>
                    <form action="">
                        <div>
                            Enter your name:
                            <div>
                                <input className='input-box' type="text" />
                            </div>
                        </div>
                        <div>
                            Enter your email:
                            <div>
                                <input className='input-box' type="email" />
                            </div>
                        </div>
                        <div>
                            Enter your username:
                            <div>
                                <input className='input-box' type="text" />
                            </div>
                        </div>
                        <div>
                            Enter your phone number:
                            <div>
                                <input className='input-box' type="number" />
                            </div>
                        </div>
                        <div>
                            Enter your password:
                            <div>
                                <input className='input-box' type="password" name="pswd" id="pswd" />
                            </div>
                        </div>
                        <div>
                            Confirm your password:
                            <div>
                                <input className='input-box' type="password" name="pswd" id="pswd" />
                            </div>
                        </div>
                        <div className='btn-container'>
                            <button type="submit" className='btn'>Register</button>
                        </div>
                    </form>
                </div>
                <div className='register-right'>
                    <div>
                        <img className='img-container' src="./img/reg.png" alt="" />
                    </div>
                    <div>
                        "Dive into Creativity! 
                        Craft, Connect, Captivate.
                        Join Us - Your AR Adventure Awaits!"
                    </div>
                </div>
            </div>
        // </Container>
    )
};

export default Register;
