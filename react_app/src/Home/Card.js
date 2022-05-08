import React, { useEffect, useState } from "react";
import CardData from "./CardData";

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

function Card(){
    
    const cards = CardData();
    try{const allCards = cards.map(function (data) {
        //let username = data.username;
        console.log("here!!!");
        let name = data.name;
        //let url = arrayBufferToBase64(data.img.data);
        //console.log(url.type);
        let image = `data:${data.img.contentType};base64,${data.img.data.toString('base64')}`;
        //let image = `data:${data.img.contentType};base64,${url}`;
        // const blob = new Blob([Int8Array.from(data.img.data)], {type: data.img.contentType });
        // let image = window.URL.createObjectURL(blob);


        return( 
            <div className = "col-3">
                <div className = "adjust">
                    <div className="image">
                        <img width="300" height="300" src={image}></img>
                    </div>
                    <div className="name">{name}</div>
                </div>
            </div>
        );
    })
    return [allCards];}
    catch(e){ return null;}
}

export default Card;