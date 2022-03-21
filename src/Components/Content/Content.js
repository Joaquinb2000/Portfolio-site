import React from "react";
import './Content.css';
import Projects from "../Projects/Projects"
import Draggable from "../Draggable/Draggable";

const Content = ({click, route}) => {
    const pdf= "https://drive.google.com/file/d/1j2Y1tQ6DXi_EHVbrFW0FUzTo_kzjoovm/view?usp=sharing";

    const option = (element) =>{
        switch (element){
            case 2:
                return <Projects/>
            case 3:
                return (
                    <div className="middle">
                        <div className="menu mv5">
                            <div className="menu-button">
                                <Draggable>
                                <form target="blank" action={pdf}>
                                    <input type="submit" value="CV" className="btn btn-primary"/>
                                </form>
                                </Draggable>
                                <Draggable>
                                    <button id="2"className="btn btn-primary" onClick={click}> Projects </button>
                                </Draggable>
                                <Draggable>
                                    <button id="0" className="btn btn-primary" onClick={click}> Go Back </button>
                                </Draggable>
                            </div> 
                        </div>
                    </div>
                )
                default: break;
        }
    }

    return (
        <div>
            {route===0
            ?
            <div className="middle">
                <div className="menu mv5">
                    <div className="menu-button">
                        <form target="blank" action={pdf}>
                            <input type="submit" value="CV" className="btn btn-primary"/>
                        </form>
                        <button id="2"className="btn btn-primary" onClick={click}> Projects </button>
                        <button id="3" className="btn btn-primary" onClick={click}> Little Surprise </button>
                    </div> 
                </div>
            </div>
            :
            option(route)
            }  
        </div>
    )
}

export default Content;