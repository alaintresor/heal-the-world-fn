import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/landing'
import Dashboard from '../pages/dashboard';
import Post from '../pages/post'
import Login from '../pages/login'
import Register from '../pages/signup'
import Chat from '../pages/chat'


const routes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/register" element={<Register />} />
        </Routes>
    );
}
export default routes;