import Axios from 'axios';
import React, { useState } from 'react';

export default function Form(){
    const [name, setName] = useState("");
    const [image, setImage] = useState(undefined);

    const changeName = (e)=>{
        setName(e.target.value);
    }
    const changeImage = (e)=>{
        setImage(e.target.files[0])
    }
    const submit = async (e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("name",name);
        formData.append("username",localStorage.getItem("user"));
        formData.append("image", image);
        const url = "http://localhost:5000/postDrawing";
        let response = await Axios.post(url,formData);
    }
    return(
        <div id="first-popup" className="popup">
            <div> 
                <div id="first-close" className="close">
                    X
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
        </form>
            </div>
        </div>
    );
}