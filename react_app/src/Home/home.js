import React, { useEffect, useState }  from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar"
import Card from "./Card/Card"
import Form from "./Form/Form"
import "./home.css";
import Axios from "axios";
function Home() {
    const [name, setName] = useState("");
    const [upload, setUpload] = useState(false);
    const [update, setUpdate] = useState(false);
    const dummy = ()=>{
        setUpdate(prev=>!prev);
    }
    const displayForm = ()=>{
        setUpload(prev => !prev)
        // console.log(upload);
    }
    useEffect(()=>{
        display();
        let url = `http://localhost:5000/getName/${localStorage.getItem("user")}`
        Axios.get(url).then((res)=>{
            setName(res.data);
        }).catch(err=>console.log(err));
    });
    const display = ()=>{
        
    }
    return(
        <>
            <Navbar />
            <div className="container">
                <h1 className="hi">Hi { name } !!! </h1> 
                <h1 className="hi">Delighted to have you here !!!</h1>
            </div>
            <div className="container">
                <button onClick={displayForm} className="upload">Upload Images</button>
                {   upload && <Form displayForm={displayForm} dummy={dummy} />  }
            </div>
            <div className="cards container">
                {/* {upload || !prev} */}
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