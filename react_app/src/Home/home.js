import React  from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar"
import Card from "./Card"
import "./home.css";
function Home() {
    const name = localStorage.getItem("user");
    
    return(
        <>
            <Navbar />
            <div className="container">
                <h1 className="hi">Hi { name } !!! </h1> 
                <h1 className="hi">Delighted to have you here !!!</h1>
            </div>
            <div className="container">
                <Card />
            </div>
        </>
    );
}

export default Home;

/*
<div className="adjust col-xs-4">
    <div className="item">
        <div className="new image">
            <i className="fa-solid fa-circle-plus fa-5x"></i>
        </div>
        <div className="name"> new drawing </div>
    </div>
</div>
*/