
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import img1 from "../assets/images/profile.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logginUser } from "../redux/slices/Auth/login";

export default function ProfileModal({ show, handleClose, user }) {
  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [username, setUsername] = useState(user.username);
  const [dob, setDob] = useState(user.dob);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [gender, setGender] = useState(user.gender)
  const [phone, setPhone] = useState(user.phone)
  const [image, setImage] = useState([])

  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  const selectImage = () => {
    const input = document.getElementById("fileInput");
    input.click();
  }

  const handSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    var data = new FormData();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('username', username);
    data.append('dob', dob);
    data.append('email', email);
    data.append('address', address);
    data.append('phone', phone);
    { image.length > 0 && data.append('image', image[0]) }


    var config = {
      method: 'put',
      url: `${process.env.REACT_APP_BACKEND_URL}/v1/user/profile`,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        const res = response.data;
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.user))
          dispatch(logginUser(res.user))
          setIsLoading(false)
          toast.success("Successfully");
          setTimeout(() => {
            handleClose()
          }, 2000);

        } else {
          setIsLoading(false)
          toast.error(`${res.message}`);

        }
      })
  }


  return (
    <>
      <ToastContainer />
      <div className={show ? "display-block" : "display-none"}>
        <div class="modal-overlay">
          <div class="modal-container">
            <div class="modal-header">
              <h2>Update Profile</h2>
              <button class="close-modal" onClick={() => handleClose()}>&times;</button>
            </div>
            <div class="modal-body">
              <div className="profile-img">
                <img src={user.profileImage ? user.profileImage : img1} alt="" onClick={() => selectImage()} />
                <div className="flex">
                  <span>{user.firstname} {user.lastname}</span>
                  <span className="primary-color">{user.email}</span>
                </div>
              </div>
              <form onSubmit={handSubmit}>
                <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => { setImage(e.target.files) }} />
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="First Name" value={firstname} required onChange={e => setFirstname(e.target.value)} />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Last Name" value={lastname} required onChange={e => setLastname(e.target.value)} />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Username" value={username} required onChange={e => setUsername(e.target.value)} />
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="form-group">
                  <select class="form-control" required onChange={e => setGender(e.target.value)}>
                    <option>Select Gender</option>
                    <option {...gender === 'Male' ? 'selected' : ''}>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="date" class="form-control" placeholder="Date of Birth" title="Date Of Birth" value={dob} required onChange={e => setDob(e.target.value)} />
                </div>
                <div class="form-group">
                  <input type="number" class="form-control" placeholder="Phone number" prefix="+" value={phone} required onChange={e => setPhone(e.target.value)} />
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Address" value={address} required onChange={e => setAddress(e.target.value)} />
                </div>
                <div class="btn-container">
                  <button type="submit" class="btn">{isLoading ? "Loading ..." : "Update"}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}