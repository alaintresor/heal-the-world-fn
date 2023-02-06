import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div class="col-lg-2 sidebar">
      <div class="nav-item">
        <Link to="/dashboard"><span> <i class="fa-solid fa-house-chimney"></i></span> Dashboard</Link>
      </div>
      <div class="nav-item">
        <Link to="/post"><span> <i class="fa-regular fa-square-plus"></i></span> Create Post</Link>
      </div>
      <div class="nav-item">
        <Link to="#"><span> <i class="fa-solid fa-users-rays"></i></span> Community</Link>
      </div>
      <div class="nav-item">
        <Link to="#"><span><i class="fa-solid fa-user-doctor"></i></span> Therapies</Link>
      </div>
      <div class="nav-item">
        <Link to="#"><span><i class="fa-solid fa-blog"></i></span> My Post</Link>
      </div>

      <div class="nav-item">
  
        <Link to="/chat"><span><i class="fa-solid fa-message"></i></span> Chat</Link>
      </div>

      <div class="nav-item">
      <Link to="/profile"> <span><i class="fa-solid fa-user"></i></span> Profile</Link>
      </div>
      <div class="nav-item">
        <Link to="#"><span><i class="fa-solid fa-circle-info"></i></span> Help</Link>
      </div>

    </div>
  );
}

