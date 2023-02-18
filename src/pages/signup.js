import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";

const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('')
    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const handleSubmit = (e) => {
        console.log(gender)
        e.preventDefault()
        setIsLoading(true)
        const data = JSON.stringify({
            "firstname": fname,
            "lastname": lname,
            "username": "default",
            "gender": gender,
            "age": dob,
            "email": email,
            "address": "default",
            "role": "user",
            "phone": tel,
            "password": password,
            "confirm_password": cpassword
        });

        var config = {
            method: 'post',
            url: 'https://mental-health-be.up.railway.app/api/v1/user/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const res = response.data;

                if (res.success) {
                    setIsLoading(false)
                    toast.success("Successfully");
                    navigate('/login')
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
            {/* This is the modal that is hidden by default */}
            <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
                <div className='modal-content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
            <div className="main">
                <div className="container">
                    <ToastContainer />
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row login-form">
                            <div className="col-lg-8 form-container">
                                <p>
                                    <h1 className="primary-color">Hello !</h1>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>

                                <div className="flex">
                                    <div className="form-group left">
                                        <label for="fname"></label>
                                        <input type="text" className="form-control" name="fname" onChange={(e) => setFname(e.target.value)} id="fname"
                                            placeholder="Enter Firstname" required />
                                    </div>
                                    <div className="form-group right">
                                        <label for="lname"></label>
                                        <input type="text" className="form-control" onChange={(e) => setLname(e.target.value)} id="lname"
                                            placeholder="Lastname" required/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="form-group left">
                                        <label for="email"></label>
                                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required/>
                                    </div>
                                    <div className="form-group right">
                                        <label for=""></label>
                                        <select className="form-control" onChange={(e) => setGender(e.target.value)} id="">
                                            <option value="G">select gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="form-group left">
                                        <label for=""></label>
                                        <input type="date" onChange={(e) => setDOB(e.target.value)} className="form-control" id=""
                                            placeholder="Date of birth" required/>
                                    </div>
                                    <div className="form-group right">
                                        <label for=""></label>
                                        <input type="tel" onChange={(e) => setTel(e.target.value)} className="form-control" id=""
                                            placeholder="Phone number" required/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="form-group left">
                                        <label for=""> </label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id=""
                                            placeholder="Password" required/>
                                    </div>
                                    <div className="form-group right">
                                        <label for=""></label>
                                        <input type="password" onChange={(e) => setCpassword(e.target.value)} className="form-control" id=""
                                            placeholder="Re-enter Password" required/>
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="submit" className="form-control" value="Sign Up" />
                                </div>

                                <div className="sign-up-link">
                                    <center>
                                        Already have an account? <span className="color_primary"><Link to="/login"> Sign in </Link></span>
                                    </center>
                                </div>
                            </div>
                            <div className="col-lg-4 text-container">
                                <h1>Glad to see you!</h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                    of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SignUp
