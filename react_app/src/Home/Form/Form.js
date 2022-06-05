import Axios from 'axios';
import React, { useState } from 'react';
import './form.css'
export default function Form(props){
    const [name, setName] = useState("");
    const [image, setImage] = useState(undefined);
    const [success, setSuccess] = useState(true);
    const changeName = (e)=>{
        setName(e.target.value);
        setSuccess(false);
    }
    const changeImage = (e)=>{
        setImage(e.target.files[0])
        setSuccess(false);
    }
    const submit = async (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("name",name);
        formData.append("username",localStorage.getItem("user"));
        formData.append("image", image);
        const url = "http://localhost:5000/postDrawing";
        let response = await Axios.post(url,formData);
        setSuccess(true);
        props.dummy();
    }

    // const close = ()=>{
    //     props.setUpload(prev => !prev);
    // }
    
    return(
        <div id="first-popup" className="popup">
            <div> 
                <div id="first-close" className="close" >
                    <button onClick={()=>props.displayForm()}>X</button>
                </div>
                <h1 className="heading1">Upload Image</h1>
                <form onSubmit={(e) => submit(e)} encType="multipart/form-data">
            <div>
                <label>Image Title</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    onChange = {(e)=> changeName(e)}
                    value={name}
                    name="name" 
                    required 
                />
            </div>
            <div>
                <label>Upload Image</label>
                <input 
                    type="file" 
                    id="image" 
                    name="image" 
                    onChange = {(e)=> changeImage(e)}
                    // value={image} 
                    required
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            { success && <div className="success">Added Successfully</div> }
        </form>
            </div>
        </div>
    );
}