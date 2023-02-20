import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import FormData from 'form-data'
import img1 from "../assets/images/profile.png"
import img2 from "../assets/images/kbb.png"
import Menu from "../components/menu";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [content,setContent]=useState('')
    const [image,setImage]=useState([])
    const navigate = useNavigate()
   const addPost=(e)=>{
    e.preventDefault()
    setIsLoading(true)
//   console.log(image)
const token = localStorage.getItem("token");
console.log(token)
var data = new FormData();
data.append('image', image[0]);
data.append('content', content);

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://mental-health-be.up.railway.app/api/v1/post/add',
  headers: { 
    'Authorization': `Bearer ${token}`, 
  },
  data : data
};

axios(config)
.then(function (response) {
    const res = response.data;
    if (res.success) {
        setIsLoading(false)
        toast.success("Post Successfully");
        setTimeout(() => {
            window.location.reload();
        }, 2000);

    } else {
        setIsLoading(false)
        toast.error(`${res.message}`);

    }
    // e.reset()
  console.log(JSON.stringify(response.data));
  setIsLoading(false)
})
.catch(function (error) {
    e.reset()
  console.log(error);
  setIsLoading(false)
});

    }

   const selectImage=()=>{
    const input = document.getElementById("fileInput");
    input.click();
   }

      
    return (
        <>
          <div style={{ display: isLoading ? 'flex' : 'none' }} className='modal'>
                <div className='modal-content'>
                    <div className='loader'></div>
                    <div className='modal-text'>Loading...</div>
                </div>
            </div>
            <div class="header">
                <div class="container-fluid">
                <ToastContainer />
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
                                    <form class="blog-form" enctype="multipart/form-data" onSubmit={(e)=>addPost(e)}>

                                        <textarea name="" id="" rows="5" onChange={(e)=>setContent(e.target.value)} placeholder="| Feel to say ......"></textarea>
                                        <input id="fileInput" type="file" style={{display:"none"}} onChange={(e)=>{setImage(e.target.files)}}/>
                                        <div class="post">
                                            <span><i class="fa-solid fa-earth-americas"></i> <b> Everyone</b> Can Reply</span>
                                        </div>
                                        
                                        <hr />
                                        <div class="post">
                                            <div class="icons">
                                                <span><i onClick={()=>selectImage()} class="fa-regular fa-image"></i></span>
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
