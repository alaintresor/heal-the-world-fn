import img1 from "../assets/images/13.png"

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
                            <i class="fa-solid fa-globe" style={{ fontSize: "25px", color: "gray" }}></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-envelope" style={{ fontSize: "25px", color: "gray" }}></i>
                        </span>
                        <span>
                            <i class="fa-regular fa-bell" style={{ fontSize: "25px", color: "gray" }}></i>
                        </span>
                        <span>
                            <img src={img1} alt="" width="50" />


                        </span>
                        <span>
                            <i class="fa-solid fa-gear" style={{ fontSize: "25px", color: "gray" }}></i>
                        </span>
                    </nav>
                </div>
            </div>
        </>

    );
}