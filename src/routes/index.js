import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/landing'
import Dashboard from '../pages/dashboard';
import Post from '../pages/post'
import Login from '../pages/login'
import Register from '../pages/signup'

import Chat from '../pages/chat'


import Forget from '../pages/forget'
import Reset from '../pages/reset-password';


const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forget-password" element={<Forget />} />
            <Route exact path="/reset-password" element={<Reset />} />
        </Routes>
    );
}
export default routes;