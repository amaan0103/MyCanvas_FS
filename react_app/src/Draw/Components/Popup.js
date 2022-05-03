import React from "react";

function Popup(){
    return(
        <div id="save-popup" class="popup">
            <div> 
                <div id="save-close" class="close">
                    <i class="fas fa-times fa-3x"></i>
                </div>
                <h1 class="heading1">I RESPECT YOUR PRIVACY</h1>
                <h2 class="heading2">I do NOT save any of your drawings in my database.
                By clicking the save button, you download directly to your device.
                </h2>
            </div>
	    </div>
    );
}
export default Popup;