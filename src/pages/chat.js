import React, { useState } from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/Sidebar'
import img1 from "../assets/images/profile.png"
import ChatUser from '../components/chatUser'

const Chat = () => {
    const [show, setShow] = useState(false)

    const showProfile = () => {
        if(show){
        document.querySelector('.chatChat').style.width = '70%'
        document.querySelector('.profileChat').style.display = 'flex'
        }else{
            document.querySelector('.chatChat').style.width = '100%'
            document.querySelector('.profileChat').style.display = 'none'
        }
        setShow(!show)
    }
    return (
        <>
            <div className='header'>
                <div class="container-fluid">
                    <Menu />
                    <section class="contents">
                        <div class="row-container">
                            <Sidebar />
                            <div class="col-lg-10 body-content">
                                <div class="container">
                                    {/* <div className='chatHeader'>
                                        <h2 className='h2Chat1'>CHAT</h2>
                                    </div> */}
                                    <br />
                                    <div className='containerChat'>
                                        <div className='containerChatTwo'>

                                            <div className='recentChat'>

                                                <div className='chat'>
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                </div>
                                            </div>
                                            <div className='chatChat'>
                                                <div className="chat-container">
                                                    <div className="chat-header">
                                                        <div className="chat-header-img">
                                                            <img src={img1} alt="" />
                                                            <div className="chat-header-name">
                                                                <h3>John Doe</h3>
                                                                <span>Active now</span>
                                                            </div>
                                                        </div>

                                                        <div className="chat-header-icons">
                                                            <span onClick={() => showProfile()}>
                                                                <i class="fa-solid fa-circle-info"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="chat-messages">

                                                        <p className="message-text">Hello, how can I help you?</p>


                                                        <p className="message-reply">Hello, how can I help you?</p>


                                                        <p className="message-text">Hello, how can I help you?</p>


                                                        <p className="message-reply">Hello, how can I help you?</p>


                                                        <p className="message-text">Hello, how can I help you?</p>


                                                        <p className="message-reply">Hello, how can I help you?</p>


                                                        <p className="message-text">I need some information about your products.</p>

                                                    </div>
                                                    <div className="chat-input-container">
                                                        <input type="text" placeholder="Type your message here..." />
                                                        <button>Send</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='profileChat'>
                                                <div className='partOne'>
                                                    <div className='img'>
                                                        <img src={img1} alt="" />
                                                        <div className='online'><div className='onlineIcon'></div></div>
                                                    </div>
                                                    <h5>Rosa</h5>
                                                    <h6>Therapist</h6>
                                                    <h6>+250780640237</h6>
                                                    <div className='line'></div>
                                                </div>
                                                <div className='partTwo'>
                                                    <p>contact Details</p>
                                                    <div className='identification'>
                                                        <div>


                                                            <span><i class="fa-solid fa-id-card"></i></span>
                                                        </div>
                                                        <div className='id'>
                                                            <span>Id</span>
                                                            <span>12345678945678</span>
                                                        </div>
                                                    </div>
                                                    <div className='identification'>
                                                        <div>


                                                            <span><i class="fa-solid fa-envelope"></i></span>
                                                        </div>
                                                        <div className='id'>
                                                            <span>Email</span>
                                                            <span>teerenzo.co@gmail.com</span>
                                                        </div>
                                                    </div>
                                                    <div className='identification'>
                                                        <div>


                                                            <span><i class="fa-solid fa-map-marker"></i></span>
                                                        </div>
                                                        <div className='id'>
                                                            <span>Address</span>
                                                            <span>Kigali,Rwanda</span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                </div></div>

                        </div>
                    </section>
                </div>


            </div>
        </>
    )
}

export default Chat
