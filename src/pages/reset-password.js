import { Link } from "react-router-dom";
import reset from "../assets/images/reset.png"
import Footer from "../components/Footer";
const Reset = () => {
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
                            <img src={reset} alt='svg' />
                        </div>
                        <div className="form-element">
                            <div class="title">
                                <center>
                                    <h2>
                                        Reset Password
                                    </h2>
                                </center>
                            </div>
                            <form>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1"
                                        placeholder="New Password" required />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" class="form-control" id="exampleFormControlInput1"
                                        placeholder="Confirm Password" required />
                                </div>
                                <br />
                                <div class="form-group">
                                    <Link to="#"> <input type="submit" class="form-control" value="Reset" /></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Reset
