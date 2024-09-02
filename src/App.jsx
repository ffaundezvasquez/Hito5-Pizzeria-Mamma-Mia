import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import productos from "../src/assets/utils/pizzas.json";
import Navbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/components/Home/Home";
import Footer from "./assets/components/Footer/Footer";
import Cart from "./assets/components/Cart/Cart";
import Pizza from "./assets/components/Pizza/Pizza";
import { Link } from "react-router-dom";
import Login from "./assets/views/Login";
import LoginPage from "./assets/components/LoginPage/LoginPage";
import Register from "./assets/views/Register";
import NotFound from "./assets/views/NotFound";
import Profile from "./assets/components/Profile";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/pizza/01" element={<Pizza />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<NotFound/>}/>
          <Route path="/profile" element={<Profile/>}/>

      </Routes> 
      <Footer />
    </>
  );
}

export default App;
