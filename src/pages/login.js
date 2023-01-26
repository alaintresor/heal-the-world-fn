import { Link } from "react-router-dom";
import img1 from "../assets/images/Padlock.png"
const Login = () => {
    return (
        <>
            <div class="main">


                <div class="container">
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
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1"></label>
                                <input type="password" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Enter Password" />
                            </div>
                            <br />
                            <div class="form-group">
                                <Link to="/dashboard"> <input type="submit" class="form-control" value="Login" /></Link>
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
                <footer class="container">
                    <hr />
                    <div class="row">
                        <div class="col-lg-6 right">
                            <span>English (United State) <span class="icon"> <i class="fa fa-angle-down"
                                aria-hidden="true"></i></span></span>
                        </div>
                        <div class="col-lg-6 left">
                            <span>
                                Help
                            </span>
                            <span>
                                Privacy
                            </span>
                            <span>
                                Terms
                            </span>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    )
}

export default Login
