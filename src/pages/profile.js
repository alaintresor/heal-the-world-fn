import { useState } from "react";
import img1 from "../assets/images/13.png"
import img2 from "../assets/images/kbb.png"
import Menu from "../components/menu";
import ProfileModal from "../components/profileModal";
import Sidebar from "../components/Sidebar";
const Profile = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className="header">
                <div className="container-fluid">
                    <Menu />
                    <section className="contents">
                        <div className="row-container">
                            <ProfileModal show={show} handleClose={handleClose} />
                            <Sidebar />
                            <div className="col-lg-10 body-content">


                                <div className="container">
                                    <div className="profile">
                                        <br />
                                        <p className="flex"><b> Kabano Festo</b><span className="small"> 42 posts</span></p>

                                    </div>
                                    <div className="profile-box">
                                        <div className="profile-header container">
                                            <div className="header-flex">
                                                <div className="content">
                                                    <img src={img1} alt="" width="80" />
                                                    <span><b>KABANO Festo</b></span>
                                                    <span className="email">festo@gmail.com</span>
                                                    <p className="rows">
                                                        <p> <span className="title"><i class="fa-regular fa-calendar-days"></i> Date Of Birth:</span> 02 March 2002</p>
                                                        <p> <span className="title"><i class="fa-sharp fa-solid fa-location-dot"></i> Location:</span> RWANDA</p>
                                                        <p> <span className="title">Gender:</span> Male</p>
                                                    </p>
                                                </div>
                                                <div >
                                                    <button className="edit-btn" onClick={() => handleShow()}>Edit Profile</button>
                                                </div>
                                            </div>
                                            <div className="titles">
                                                <span className="active">Posts</span>
                                                <span>Replies</span>
                                                <span>Media</span>
                                                <span>Likes</span>
                                            </div>
                                        </div>

                                        <div className="blog">
                                            <div className="header">
                                                <img src={img1} alt="" width="50" />
                                                <div className="names">
                                                    <span> <b>Kabano Festo</b> <span className="small"> Rwanda</span></span>
                                                    <span className="small">@kbb .2 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac potenti nunc
                                                    nibh a
                                                    faucibus rhoncus..
                                                </p>
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className="footer">
                                                <span> <i className="fa-regular fa-comment primary-color"></i> 45</span>
                                                <span><i className="fa-regular fa-heart"></i> 3k</span>
                                                <span><i className="fa-regular fa-eye"></i> 12k</span>
                                                <span><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
                                            </div>
                                        </div>
                                        <div className="blog">
                                            <div className="header">
                                                <img src={img1} alt="" width="50" />
                                                <div className="names">
                                                    <span> <b>Kabano Festo</b> <span className="small"> Rwanda</span></span>
                                                    <span className="small">@kbb .2 hours ago</span>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac potenti nunc
                                                    nibh a
                                                    faucibus rhoncus..
                                                </p>
                                                <img src={img2} alt="" />
                                            </div>
                                            <div className="footer">
                                                <span> <i className="fa-regular fa-comment primary-color"></i> 45</span>
                                                <span><i className="fa-regular fa-heart"></i> 3k</span>
                                                <span><i className="fa-regular fa-eye"></i> 12k</span>
                                                <span><i className="fa-solid fa-arrow-up-from-bracket"></i></span>
                                            </div>
                                        </div>
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

export default Profile