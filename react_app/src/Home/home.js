import React  from "react";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";
function Home() {
    const name = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = (e)=>{
        e.preventDefault();
        localStorage.removeItem("user");
        navigate("/login");
    }
    return(
        <>
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
            <div className="container">
                <h1 className="hi">Hi { name } !!! </h1> 
                <h1 className="hi">Delighted to have you here !!!</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="adjust col-xs-4">
                        <Link to="/canvas">
                            <div className="item">
                                {/* <div className="new image">
                                    <img src="pic.jpg"></img>
                                </div> */}
                                <div className="name"> new drawing </div>
                            </div>
                        </Link>
                    </div>
                    <div className="adjust col-xs-4">
                        <div className="item">
                            <div className="new image">
                                <i className="fa-solid fa-circle-plus fa-5x"></i>
                            </div>
                            <div className="name"> new drawing </div>
                        </div>
                    </div>
                    <div className="adjust col-xs-4">
                        <div className="item">
                            <div className="new image">
                                <i className="fa-solid fa-circle-plus fa-5x"></i>
                            </div>
                            <div className="name"> new drawing </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;