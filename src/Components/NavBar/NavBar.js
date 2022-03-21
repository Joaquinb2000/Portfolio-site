import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import Draggable from "../Draggable/Draggable";
import './NavBar.css';

const Navbar = ({route, click}) => {
    if(route!==3)
        return(//Regular homepage
            <div className="banner">
                <div className= "head">{
                    route!==2 
                    ?<h1 className= "">
                        <strong>Hello, I'm Joaquin </strong>
                    </h1>
                    : <button onClick={click} id="0" className="go-back grow">Go Back</button>}
                </div> 
                <SocialMedia/>
            </div>
        )
        

    return( //Draggable version
        <div className="banner">
            <Draggable>
                <div className= "head">
                    <h1 className= "tc">
                        <strong>Now you can drag elements around! </strong>
                    </h1>
                </div>    
            </Draggable> 
            <Draggable>
                <SocialMedia/>
            </Draggable>  
        </div>
    )
}

export default Navbar;