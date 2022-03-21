import React, { useState, useEffect } from "react";
import 'animate.css'
import Github from './img/PngItem_1280311.png';
import Linkedin from "./img/pngkey.com-linkedin-logo-png-290376.png";
import Email from "./img/kindpng_7366382.png";
import './SocialMedia.css';


const SocialMedia = () =>{
    const [Dropdownemail, displayEmail]= useState(false);

    const email= <div className="email animate__animated animate__fadeIn">
                    <p>joaquinberon2000@gmail.com</p>
                 </div>

    const showEmail= (event)=>{
       if(event.nativeEvent.path[2].id!=="Drag")
       displayEmail(true); 
    }

    const hideEmail=()=>{
        displayEmail(false);
    }

    return(
            <div className="social_media">
            <a className="linked-image" href= "https://www.linkedin.com/in/joaquin-berrios-826001172/" target="blank">
                <img src= { Linkedin } 
                                alt= "error"/>
            </a>

            <a className="linked-image" href="https://github.com/Joaquinb2000" target="blank">
                <img src= { Github } 
                        alt= "error"/> 
            </a>

            <button onFocus={ showEmail} onBlur={ hideEmail } className="linked-image" id="email" href="" target="blank">
                <img src= { Email }
                    alt= "error"/>
            {Dropdownemail===true? email : <></>}  
            </button> 
    
        </div>)
        
}

export default SocialMedia;