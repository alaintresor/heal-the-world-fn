import { Link } from "react-router-dom";
import img1 from "../assets/images/Padlock.png"
import forget from "../assets/images/forget.svg"
import Footer from "../components/Footer";
const Login = () => {
    return (
        <>
            <div class="forget">


                <div class="container">
                    <div className="log">
                        <h1>HEAL THE WORLD</h1>
                        <p>You are not alone</p>
                    </div>
                    <div class="forget-form">
                        <div className="image">
                            <img src={forget} />
                        </div>
                        <div className="form-element">
                            <div class="title">
                                <center>
                                    <h2>
                                        Forgot password
                                    </h2>
                                </center>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1"></label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Enter Email" />
                            </div>
                            <br />
                            <div class="form-group">
                                <Link to="/reset-password"> <input type="submit" class="form-control" value="Submit" /></Link>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Login
