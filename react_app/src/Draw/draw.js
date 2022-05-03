import React from "react";
import UpperToolbox from "./Components/UpperToolbox";
import Canvas from "./Components/Canvas";
import LowerToolbox from "./Components/LowerToolbox";
//import External from "./External";
import $ from "jquery";
import Popup from "./Components/Popup";
import "./draw.css";

class Draw extends React.Component{

    //External();
    componentDidMount(){
        const script = document.createElement("script");    
        script.async = true;    
        script.src = "./js/script.js";    
        this.div.appendChild(script);
    }
   render(){
        return(
            <>
                {/* <Popup /> */}
                <UpperToolbox />
                <Canvas />
                <LowerToolbox />

                {script}
            </>
        );
   }
}
export default Draw;