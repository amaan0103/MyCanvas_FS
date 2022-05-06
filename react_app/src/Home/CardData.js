import React, { useState } from "react";

function CardData(){
    const [data, setData] = useState({
        lst: []
    });
    const url = 'http://localhost:5000/getDrawings/'+localStorage.getItem("user");
    Axios.get(url).then((res)=>{
        setData(res.data);
    });
    return data;
}
export default CardData;