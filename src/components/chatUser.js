import React from 'react'
import img1 from "../assets/images/13.png"
const chatUser = () => {
    return (
        <>
            <div className='chatUser'>
                <div className='img'>
                    <img src={img1} alt="" />
                    <div className='online'><div className='onlineIcon'></div></div>
                </div>
                <div className='textChat'>
                    <div className='nameTime'>
                        <span>
                            John Doe
                        </span>
                        <span>
                            3 min
                        </span>
                    </div>

                    <p>Lorem ipsum dolo...</p>

                </div>
            </div>
        </>
    )
}

export default chatUser
