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
