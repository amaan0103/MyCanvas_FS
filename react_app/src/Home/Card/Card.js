// import React, { useEffect, useState } from "react";
// import CardData from "./CardData";

// function arrayBufferToBase64(buffer) {
//     var binary = '';
//     var bytes = [].slice.call(new Uint8Array(buffer));
//     bytes.forEach((b) => binary += String.fromCharCode(b));
//     return window.btoa(binary);
// };

// function Card(){
    
//     const cards = CardData();
//     try{const allCards = cards.map(function (data) {
//         //let username = data.username;
//         console.log("here!!!");
//         let name = data.name;
//         //let url = arrayBufferToBase64(data.img.data);
//         //console.log(url.type);
//         let image = `data:${data.img.contentType};base64,${data.img.data.toString('base64')}`;
//         //let image = `data:${data.img.contentType};base64,${url}`;
//         // const blob = new Blob([Int8Array.from(data.img.data)], {type: data.img.contentType });
//         // let image = window.URL.createObjectURL(blob);


//         return( 
//             <div className = "col-3">
//                 <div className = "adjust">
//                     <div className="image">
//                         <img width="300" height="300" src={image}></img>
//                     </div>
//                     <div className="name">{name}</div>
//                 </div>
//             </div>
//         );
//     })
//     return [allCards];}
//     catch(e){ return null;}
// }

// export default Card;
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Picture from "../Picture/Picture"
// import Form from "../Form/Form";
// import CardData from "./CardData";

function Card(props){
    // let cards = "";
    const [cards, setCards] = useState([]);
    const [displayPic, setDisplayPic] = useState(false);
    useEffect(()=>{
        getData();
    },[]);
    useEffect(()=>{
        getData();
    },[props]);
    async function getData(){
        const url = `http://localhost:5000/getDrawings/${localStorage.getItem("user")}`;
        Axios.get(url).then(res=>{
            setCards(res.data);
            console.log(res.data.name);
        });
    }
    function enlarge(props){
        console.log(props+" *** ")
        setDisplayPic(prev=>!prev);
    }
    // const cards = CardData();
    try{const allCards = cards.map( function (data) {
        //let username = data.username;
        // console.log("here: "+data._id);
        const name = data.name;

        const blob = new Blob([Int8Array.from(data.img.data.data)], {type: data.img.contentType });

        const image = window.URL.createObjectURL(blob);
        //let image = `data:${data.img.contentType};base64,${(data.img.data.data).toString('base64')}`;
        return( 
            <>
            {displayPic && <Picture picData={data} displayPic={enlarge}/>}
            <div className = "col-3 item">
                <div className = "adjust" onClick={()=>enlarge(data._id)}>
                    <div className="image">
                        <img src={image}></img>
                    </div>
                    <div className="name">{name}</div>
                </div>
            </div>
            </>
        );
    })
    return [allCards];}
    catch(e){ return null;}
}

export default Card; 