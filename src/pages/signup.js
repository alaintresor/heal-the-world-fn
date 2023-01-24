import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <>
            <div className="main">
                <div className="container">
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
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Enter Firstname" />
                                </div>
                                <div className="form-group right">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Lastname" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="form-group left">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
                                </div>
                                <div className="form-group right">
                                    <label for="exampleFormControlInput1"></label>
                                    <select className="form-control" id="exampleFormControlInput1">
                                        <option value="G">select gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="form-group left">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="date" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Date of birth" />
                                </div>
                                <div className="form-group right">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Phone number" />
                                </div>
                            </div>
                            <div className="flex">
                                <div className="form-group left">
                                    <label for="exampleFormControlInput1"> </label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Password" />
                                </div>
                                <div className="form-group right">
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="password" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Re-enter Password" />
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
                </div>
                <footer className="container">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 right">
                            <span>English (United State) <span className="icon"> <i className="fa fa-angle-down"
                                aria-hidden="true"></i></span></span>
                        </div>
                        <div className="col-lg-6 left">
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
            </div>
        </>
    )
}

export default SignUp
