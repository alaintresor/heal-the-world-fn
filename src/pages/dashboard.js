import img2 from "../assets/images/back.svg"
import Menu from "../components/menu";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
    return (
        <>
            <div class="header">


                <div class="container-fluid">
                    <Menu />
                    <section class="contents">
                        <div class="row-container">
                            <Sidebar />
                            <div class="col-lg-10 body-content">
                                <div class="container">
                                    <div class="box">
                                        <h3>Hi, Welcome Back !</h3>
                                        <div class="content">
                                            We hope that you are going to heal others,
                                            And as well as that you are going to heal.
                                            We want you to know that mental health
                                            matters and you are responsible to make it
                                            better.

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
