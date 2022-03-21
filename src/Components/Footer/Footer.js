import React from "react";
import './Footer.css'
import Draggable
 from "../Draggable/Draggable";
const Footer = ({route}) => { 
    
    
    const display = [
        <div>
            <h3 style={{paddingBottom: "20px"}}>Thank you for visiting!</h3>
        </div>
       ,
        <>     
        </>
        ,
        <div>
            <h3 className="tc">If you wish to visit one of the displayed sites you can do so by clicking the project card</h3>
        </div>
        ,
        <div className="tc" style={{height: "20vh"}}>
            <Draggable className="tc"><h3>You can drag everything you see, even this message!</h3></Draggable>
            <Draggable className="tc"><h3>Dragging elements outside the window will set the element on the respective screen border</h3></Draggable>
            <Draggable className="tc"><h3>(Only available for Desktop browser version)</h3></Draggable>    
        </div>
    ]
    
    return (
    <footer>
        {display[route]}
    </footer>    
    );
}

export default Footer;