import React from "react";

function LowerToolbox(){
    return(
        <div id="lower-toolbox" class="container">
            <div class ="go-left">
                <button id="decrease">
                    <i class="fas fa-minus fa-2x"></i>
                </button>
                <input id="size" type="text" value="10" align="center"></input>
                <button id="increase">
                    <i class="fas fa-plus fa-2x"></i>
                </button>
                <input id="color" type="color"></input>
            </div>
            <div class="go-right">
                <button id="eraser">
                    <i class="fas fa-eraser fa-2x"></i>
                </button>
                <button id="clear">
                    <i class="fas fa-times fa-2x"></i>
                </button>
            </div>
	    </div>
    );
}
export default LowerToolbox;