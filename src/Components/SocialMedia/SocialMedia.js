import React, { useState } from "react";
import 'animate.css'
import Draggable from '../Draggable/Draggable'
import Email from "./img/kindpng_7366382.png";
import { SOCIAL_MEDIA } from "./Accounts";
import './SocialMedia.css';

const SocialMedia = ({draggable}) =>{
    const [Dropdownemail, displayEmail]= useState(false);
    let children = SOCIAL_MEDIA.map(({href, imgSrc, alt}) =>{
        return (
            <a id={alt} key={alt} className="linked-image" href={href} target="blank">
                <img src={imgSrc} alt={alt}/>
            </a>
        )
    })

    if (draggable)
        children = children.map((child, i) => <Draggable key={i}>{child}</Draggable>)

    const email= <div className="email animate__animated animate__fadeIn">
                    <p>joaquinberon2000@gmail.com</p>
                 </div>

    const showEmail= (event)=>{
        event.preventDefault()
        event.stopPropagation()
        displayEmail(true);
    }

    const hideEmail=()=>{
        displayEmail(false);
    }

    const emailDisplay = (
        <a id="email" onFocus={ showEmail } onBlur={ hideEmail } className="linked-image" href="#" target="blank">
            <img src= { Email } alt= "error"/>
            {Dropdownemail=== true ? email : <></>}
        </a>
    )

    return(
            <div className="social_media">
                {children}
                { !draggable
                    ? emailDisplay
                    : <Draggable>{emailDisplay}</Draggable>
                }
            </div>)

}

export default SocialMedia;
