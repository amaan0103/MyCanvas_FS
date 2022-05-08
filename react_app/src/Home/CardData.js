import React, { useState } from "react";
import Axios from "axios";

export default function CardData(){
    const [data, setData] = useState({
        lst: []
    });

    //console.log("damn" + data.type);
    const url = `http://localhost:5000/getDrawings/${localStorage.getItem("user")}`;
    Axios.get(url).then((res)=>{
        //console.log(res.data);
        setData(res.data);
    }).catch(err=>console.log(err));
    //console.log("damn 2 " + data); 
    return data;
} 
//export default [{name:"aha"},{name:"hehe"}];
//export default CardData;
/*
.then((res)=>{
        console.log(res.data);
        setData(res.data);
    }).catch(err=>console.log(err));
    console.log("damn 2 " + data); 
    return data;
*/