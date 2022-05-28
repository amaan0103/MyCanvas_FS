// import React, { useState } from "react";
// import Axios from "axios";

// export default function CardData(){
//     const [data, setData] = useState({
//         lst: []
//     });

//     const url = `http://localhost:5000/getDrawings/${localStorage.getItem("user")}`;
//     Axios.get(url).then((res)=>{
//         setData(res.data);
//     }).catch(err=>console.log(err));
//     return data;
// } 
import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function CardData(){
    const [data, setData] = useState(
        []
    );


useEffect(() => {

    const url = `http://localhost:5000/getDrawings/${localStorage.getItem("user")}`;
    Axios.get(url).then((res)=>{
        setData(res.data);
        console.log(res.data);
    }).catch(err=>console.log(err));
  }, []);

    return data;
}