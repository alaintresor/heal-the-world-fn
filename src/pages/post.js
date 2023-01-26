import img1 from "../assets/images/13.png"
import img2 from "../assets/images/kbb.png"
import Menu from "../components/menu";
import Sidebar from "../components/Sidebar";
const Post = () => {
    return (
        <>
            <div class="header">
                <div class="container-fluid">
                    <Menu />
                    <section class="contents">
                        <div class="row-container">
                            <Sidebar />
                            <div class="col-lg-10 body-content">
                                <br />
                                <div class="container">
                                    <h3>Post</h3>
                                </div>
                                <hr />
                                <div class="container">
                                    <form action="" class="blog-form">

                                        <textarea name="" id="" rows="5" placeholder="| Feel to say ......"></textarea>
                                        <div class="post">
                                            <span><i class="fa-solid fa-earth-americas"></i> <b> Everyone</b> Can Reply</span>
                                        </div>

                                        <hr />
                                        <div class="post">
                                            <div class="icons">
                                                <span><i class="fa-regular fa-image"></i></span>
                                                <span><i class="fa-regular fa-face-smile"></i></span>
                                                <span><i class="fa-solid fa-video"></i></span>
                                                <span><i class="fa-solid fa-location-dot"></i></span>
                                            </div>
                                            <div class="submittion">
                                                <button>Post</button>
                                            </div>
                                        </div>

                                    </form>
                                    <hr />
                                    <center>
                                        <h3>
                                            Recent Posts (23)
                                        </h3>
                                    </center>
                                    <hr />
                                    <div class="blog">
                                        <div class="header">
                                            <img src={img1} alt="" width="50" />
                                            <div class="names">
                                                <span> <b>Kabano Festo</b> <span class="small"> Rwanda</span></span>
                                                <span class="small">@kbb .2 hours ago</span>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac potenti nunc nibh a
                                                faucibus rhoncus..
                                            </p>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div class="footer">
                                            <span> <i class="fa-regular fa-comment primary-color"></i> 45</span>
                                            <span><i class="fa-regular fa-heart"></i> 3k</span>
                                            <span><i class="fa-regular fa-eye"></i> 12k</span>
                                            <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
                                        </div>
                                    </div>
                                    <div class="blog">
                                        <div class="header">
                                            <img src={img1} alt="" width="50" />
                                            <div class="names">
                                                <span> <b>Kabano Festo</b> <span class="small"> Rwanda</span></span>
                                                <span class="small">@kbb .2 hours ago</span>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac potenti nunc nibh a
                                                faucibus rhoncus..
                                            </p>
                                            <img src={img2} alt="" />
                                        </div>
                                        <div class="footer">
                                            <span> <i class="fa-regular fa-comment primary-color"></i> 45</span>
                                            <span><i class="fa-regular fa-heart"></i> 3k</span>
                                            <span><i class="fa-regular fa-eye"></i> 12k</span>
                                            <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
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

export default Post
