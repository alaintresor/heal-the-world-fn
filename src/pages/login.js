import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";
import img1 from "../assets/images/Padlock.png"
import Footer from "../components/Footer";
import { logginUser } from "../redux/slices/Auth/login";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const [isLoading, setIsLoading] = useState(false);
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
            url: `${process.env.REACT_APP_BACKEND_URL}/v1/user/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.success) {
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("id", res.user.id)

                    setIsLoading(false)
                    toast.success("Successfully");
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 2000);

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
                                <h1>Be healthly</h1>
                                <p>
                                    We hope that you are going to heal others,
                                    And as well as that you are going to heal.
                                    We want you to know that mental health
                                    matters and you are responsible to make it
                                    better.
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
                                        placeholder="Enter Email" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleFormControlInput2"
                                        placeholder="Enter Password" required />
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
