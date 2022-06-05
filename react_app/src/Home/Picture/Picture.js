import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './picture.css'
export default function Picture(props){
    // const close = ()=>{
    //     props.setUpload(prev => !prev);
    // }
    useEffect(()=>console.log(props.picData._id+" Picture"),[]);
    const name = props.picData.name;

    const blob = new Blob([Int8Array.from(props.picData.img.data.data)], {type: props.picData.img.contentType });
    const image = window.URL.createObjectURL(blob);
    
    return(
        <div id="first-popup" className="popup">
            <div id='adjust'>
                <div id="navbar"> 
                    <div id="first-close" className="close" >
                        <button onClick={()=>props.displayPic(props.picData._id)}>X</button>
                    </div>
                    <h1 className="heading1">{name}</h1>
                </div>
                <div id="image">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
}