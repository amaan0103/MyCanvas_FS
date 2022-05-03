import React from "react";

function UpperToolbox(){
    return(
        <div id="upper-toolbox" class="container">
            <button id="save" class="go-left">
                <a id="downloadLnk" download="MyCanvas.jpg">SAVE</a>
            </button>
            <button id="mode" class="go-right">
                <i id="mode-icon"class="fas fa-moon fa-3x"></i>
            </button>
	    </div>
    );
}
export default UpperToolbox;