import { Link } from "react-router-dom";
import img1 from "../assets/images/13.png"
import img2 from "../assets/images/back.svg"
const Dashboard = () => {
    return (
        <>
            <div class="header">


                <div class="container-fluid">
                    <div class="menu row">
                        <div class="log col-lg-6">
                            <h1>HEAL THE WORLD</h1>
                            <p>You are not alone</p>
                        </div>
                        <div class="nav col-lg-6">
                            <nav>

                                <span>
                                    <i class="fa-solid fa-globe" style={{fontSize: "30px",color: "gray"}}></i>
                                </span>
                                <span>
                                    <i class="fa-regular fa-envelope" style={{fontSize: "30px",color: "gray"}}></i>
                                </span>
                                <span>
                                    <i class="fa-regular fa-bell" style={{fontSize: "30px",color: "gray"}}></i>
                                </span>
                                <span>
                                    <img src={img1} alt="" />


                                </span>
                                <span>
                                    <i class="fa-solid fa-gear" style={{fontSize: "30px",color: "gray"}}></i>
                                </span>
                            </nav>
                        </div>
                    </div>
                    <section class="contents">
                        <div class="row-container">
                            <div class="col-lg-2 sidebar">
                                <div class="nav-item">
                                    <Link to="#"><span> <i class="fa-solid fa-house-chimney"></i></span> Dashboard</Link>
                                </div>
                                <div class="nav-item">
                                    <Link to="/post"><span> <i class="fa-regular fa-square-plus"></i></span> Create Post</Link>
                                </div>
                                <div class="nav-item">
                                    <Link to="#"><span> <i class="fa-solid fa-users-rays"></i></span> Community</Link>
                                </div>
                                <div class="nav-item">
                                    <Link to="#"><span><i class="fa-solid fa-user-doctor"></i></span> Therapies</Link>
                                </div>
                                <div class="nav-item">
                                    <Link to="#"><span><i class="fa-solid fa-blog"></i></span> My Post</Link>
                                </div>

                                <div class="nav-item">
                                    <Link to="#"> <span><i class="fa-solid fa-user"></i></span> Profile</Link>
                                </div>
                                <div class="nav-item">
                                    <Link to="#"><span><i class="fa-solid fa-circle-info"></i></span> Help</Link>
                                </div>

                            </div>
                            <div class="col-lg-10 body-content">
                                <div class="container">
                                    <div class="box">
                                        <h3>Hi, Welcome Back !</h3>
                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac potenti nunc nibh a
                                            faucibus rhoncus. Ipsum gravida ut mattis in euismod enim id netus porttitor.
                                            Scelerisque quisque augue congue ipsum feugiat. Dui lorem sit nullam
                                        </div>
                                    </div>

                                    <div class="box">
                                        <img src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </>
    )
}

export default Dashboard
