import img1 from "../assets/images/profile.png"
import {
    BellIcon, ChatAltIcon, GlobeAltIcon
} from '@heroicons/react/outline';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu() {

    const { user } = useSelector(state => state.user)
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
                            <Link to="/profile">
                                <img src={user.profileImage !== '' ? user.profileImage : img1} alt="" width="50" />
                            </Link>
                        </span>
                        {/* <span>
                            <CogIcon className="icon" />
                        </span> */}
                    </nav>
                </div>
            </div>
        </>

    );
}