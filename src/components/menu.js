import img1 from "../assets/images/13.png"
import {
    CogIcon, BellIcon, ChatAltIcon,GlobeAltIcon


} from '@heroicons/react/outline';

export default function Menu() {
    return (
        <>
            <div class="menu row">
                <div class="log col-lg-6">
                    <h1>HEAL THE WORLD</h1>
                    <p>You are not alone</p>
                </div>
                <div class="nav col-lg-6">
                    <nav>

                        <span>
                            
                            <GlobeAltIcon className="icon" />
                        </span>
                        <span>
                            <ChatAltIcon className="icon" />
                        </span>
                        <span>
                            <BellIcon className="icon" />
                        </span>
                        <span>
                            <img src={img1} alt="" width="50" />


                        </span>
                        <span>
                            <CogIcon className="icon" />
                        </span>
                    </nav>
                </div>
            </div>
        </>

    );
}