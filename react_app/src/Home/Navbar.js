import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    const logout = (e)=>{
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/login");
    }
    return(
        <div className="topnav">
            <div className="nav-element">
                <h1>My Canvas</h1>
            </div>
            <div className="nav-element right">
                <form onSubmit={(e) => logout(e)}>
                    <input type="submit" value="logout" />
                </form>
            </div>
        </div>
    )
}

export default Navbar;