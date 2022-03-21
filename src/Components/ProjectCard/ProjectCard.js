import React from "react";
import './ProjectCard.css'

const ProjectCard = ({title, description, image, used, link}) => {
    return (
        <article id="card" className="bg-light-gray br3 pa2-ns ph3 ba b--black-10 grow">
            <a target="blank" href={link} >
                    <div className="tc bg-moon-gray pa2 br3 ">
                        <img src={image} className="br3 dib" alt="Project"/>
                        <h1 className=" black-80 mv1">{title}</h1>
                        <hr className="mw5 bb bw1 b--black"/>
                        <h4 className=" black-80">{used}</h4>
                        <hr className="mw6 bb bw1 b--black"/>
                    </div>
                    <p className="tc lh-copy measure center f4 black-70">
                        {description}
                    </p>
        
            </a>
        </article>
    )
}

export default ProjectCard;