import { Axios } from "axios";
import React from "react";
// import './styles.css'

function Draw(){
    const url = "http://localhost:5000/draw";
    const page = Axios.get(url);
    return(page);
    // return(
    //     <>
    //         <div id="first-popup" class="popup">
    //             <div> 
    //                 <div id="first-close" class="close">
    //                     <i class="fas fa-times fa-3x"></i>
    //                 </div>
    //                 <h1 class="heading1">NOTE</h1>
    //                 <h2 class="heading2">Please do not change the screen size (in desktop) or orientation
    //                     (to landscape in case of mobile) as it alters offset of the canvas and 
    //                     the app behaves a bit weird so, you won't be able to draw properly.
    //                     It still has bugs and I need to fix 'em <br></br><br></br>
    //                     Tip: if you want to go landscape in mobile, stay in portrait and switch off
    //                     auto rotate in your device.
    //                 </h2>
    //             </div>
    //         </div>
    //         <div id="save-popup" class="popup">
    //             <div> 
    //                 <div id="save-close" class="close">
    //                     <i class="fas fa-times fa-3x"></i>
    //                 </div>
    //                 <h1 class="heading1">I RESPECT YOUR PRIVACY</h1>
    //                 <h2 class="heading2">I do NOT save any of your drawings in my database.
    //                 By clicking the save button, you download directly to your device.
    //                 </h2>
    //             </div>
    //         </div>
            
    //         <div id="upper-toolbox" class="container">
    //             <button id="save" class="go-left">
    //                 <a id="downloadLnk" download="MyCanvas.jpg">SAVE</a>
    //             </button>
    //             <button id="mode" class="go-right">
    //                 <i id="mode-icon"class="fas fa-moon fa-3x"></i>
    //             </button>
    //         </div>
            
    //         <canvas id="myCanvas" width="500" height="700"></canvas>
    //         <canvas id="saveCanvas" width="500" height="700"></canvas>
            
    //         <div id="lower-toolbox" class="container">
    //             <div class ="go-left">
    //                 <button id="decrease">
    //                     <i class="fas fa-minus fa-2x"></i>
    //                 </button>
    //                 <input id="size" type="text" value="10" align="center"></input>
    //                 <button id="increase">
    //                     <i class="fas fa-plus fa-2x"></i>
    //                 </button>
    //                 <input id="color" type="color"></input>
    //             </div>
    //             <div class="go-right">
    //                 <button id="eraser">
    //                     <i class="fas fa-eraser fa-2x"></i>
    //                 </button>
    //                 <button id="clear">
    //                     <i class="fas fa-times fa-2x"></i>
    //                 </button>
    //             </div>
    //         </div>
    //     </>
    // );
}

export default Draw;