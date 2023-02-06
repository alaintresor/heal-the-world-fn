import React from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/Sidebar'
import img1 from "../assets/images/13.png"
import ChatUser from '../components/chatUser'
const chat = () => {
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
                                    <div className='chatHeader'>
                                        <h2 className='h2Chat1'>CHAT</h2>
                                        <h2 className='h2Chat2'>chat</h2>
                                    </div>

                                    <div className='containerChat'>
                                        <div className='containerChatTwo'>

                                            <div className='recentChat'>
                                                <button class="btn-borded">
                                                    Recent Chat
                                                </button>
                                                <div className='chat'>
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
                                                    <ChatUser />
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
                                                        <h3>Chat</h3>
                                                    </div>
                                                    <div className="chat-messages">
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">Hello, how can I help you?</p>
                                                        </div>
                                                        <div className="message-container">
                                                            <p className="message-text">I need some information about your products.</p>
                                                        </div>
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
                                                        <img src={img1} />
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

export default chat
