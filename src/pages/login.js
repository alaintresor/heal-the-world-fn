import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/images/Padlock.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const data = JSON.stringify({
            "email": username,
            "password": password
        });

        var config = {
            method: 'post',
            url: 'https://mental-health-be.up.railway.app/api/v1/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                console.log(res)
                if (res.success) {
                    setIsLoading(false)
                    toast.success("Successfully");
                    navigate('/dashboard')
                } else {
                    setIsLoading(false)
                    toast.error(`${res.message}`);

                }

            })
            .catch(function (error) {
                setIsLoading(false)

                console.log(error.response);
            });
    }

    return (
        <>
            <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
                <div className='modal-content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
            <div class="main">

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="container">
                        <ToastContainer />
                        <div class="row login-form">
                            <div class="col-lg-6 text-container">
                                <h1>Being healthly</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div class="col-lg-6 form-container">
                                <div class="title">
                                    <center>
                                        <img src={img1} alt="" width="60" />
                                    </center>
                                    <h2>
                                        Welcome Back !
                                    </h2>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="email" class="form-control" onChange={(e) => setUsername(e.target.value)} id="exampleFormControlInput1"
                                        placeholder="Enter Email" required/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput2"
                                        placeholder="Enter Password" required/>
                                </div>
                                <br />
                                <div class="form-group">
                                    <input type="submit" class="form-control" value="Login" />
                                </div>

                                <div class="flex">
                                    <div>
                                        Create Account <span> <Link to="/register">Sign Up</Link></span>
                                    </div>
                                    <div>
                                        <span> <Link to='/forget-password'>Forget Password</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Footer />
            </div >
        </>
    )
}

export default Login
