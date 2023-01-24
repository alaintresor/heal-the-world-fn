import { Link } from "react-router-dom";
import bk from "../assets/images/img.png"
const HotelSearchCard = () => {
    return (
        <>
            <div class="main">


                <div class="container">
                    <div class="index-menu">
                        <div class="log ">
                            <h1>HEAL THE WORLD</h1>
                            <p>You are not alone</p>
                        </div>
                        <div class="nav ">
                            <nav>
                                <span class="login">
                                    <Link to="/login"> Login</Link>
                                </span>
                                <span class="btn-borded">
                                    <Link to="/register">Join Now</Link>
                                </span>
                                <span class="mobile-menu">
                                    <i class="fa-solid fa-bars"></i>
                                </span>
                            </nav>
                        </div>
                    </div>
                    <div class='home'>
                        <div class="row content">
                            <div class="text col-lg-6">
                                <h2>
                                    You Have to improve
                                    your mental health
                                </h2>
                                <p>Good mental health throughout life can increase resilience, helping protect against mental
                                    illness and act as a buffer for normal stressors and hardships that everyone experiences</p>
                                <div class="btn-container">
                                    <button class="btn-borded">
                                        Get Appointment
                                    </button>
                                    <button class="btn-outlined">
                                        Read More
                                    </button>
                                </div>

                            </div>
                            <div class="image col-lg-6">
                                <img src={bk} alt="" />
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

export default HotelSearchCard
