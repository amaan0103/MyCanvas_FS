import React, { useState }  from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar"
import Card from "./Card"
import Form from "./Form/Form"
import "./home.css";
function Home() {
    const name = localStorage.getItem("user");
    const [upload, setUpload] = useState(false);
    const displayForm = ()=>{
        setUpload(prev => !prev)
    }
    return(
        <>
            <Navbar />
            <div className="container">
                <h1 className="hi">Hi { name } !!! </h1> 
                <h1 className="hi">Delighted to have you here !!!</h1>
            </div>
            <button onClick={displayForm} className="upload">Upload Images</button>
            {   upload && <Form />  }
            <div className="cards container">
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