import { Axios } from "axios";
import React from "react";

function Draw(){
    const url = "http://localhost:5000/draw";
    const page = Axios.get(url);
    return(page);
}

export default Draw;