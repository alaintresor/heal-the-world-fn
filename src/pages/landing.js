import { Link } from "react-router-dom";
import bk from "../assets/images/img.png"
import Footer from "../components/Footer";
const HotelSearchCard = () => {



    let isShowing = false
    const showMenu = () => {
        const menu = document.getElementById('mobile')
        if (!isShowing) {
            menu.style.display = "block"
            menu.style.left = 0;
            isShowing = true;
            document.getElementById("mobile-menu").innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>'
        }
        else {
            menu.style.display = "none"
            isShowing = false;
            document.getElementById("mobile-menu").innerHTML = ' <i class="fa-solid fa-bars" ></i>'
        }

    }
    return (
        <>
            <div class="main">


                <div class="container">
                    <div class="index-menu">
                        <div class="log-landing ">
                            <h1>HEAL THE WORLD</h1>
                            <p>You are not alone</p>
                        </div>
                        <div class="nav landing ">
                            <nav>
                                <span class="login">
                                    <Link to="/login"> Login</Link>
                                </span>
                                <span class="btn-borded">
                                    <Link to="/register">Join Now</Link>
                                </span>
                                <span class="mobile-menu" onClick={() => showMenu()} id="mobile-menu">
                                    <i class="fa-solid fa-bars" ></i>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="mobile-nav" id="mobile">
                    <div class="container">
                        <h1>HEAL THE WORLD</h1>
                        <p>You are not alone</p>
                        <div class="menu-item">
                            <Link to="/login"> <span>
                                Login
                            </span></Link>
                            <Link to="/register"><span>
                                Join Now
                            </span></Link>
                        </div>
                    </div>
                </div>
                <div className="container">

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
                                    <Link to="/login"> <button class="btn-borded">
                                        Get Appointment
                                    </button></Link>
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
                <Footer />
            </div>

        </>
    )
}

export default HotelSearchCard