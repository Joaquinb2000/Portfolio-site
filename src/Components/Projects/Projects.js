import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Scroll from "../Scroll/Scroll";
import projectInfo from "./projectInfo";

const Projects = () => {
    const cards= projectInfo.map((project, num) =>{
        return (<ProjectCard
                    key= {num} title={project.name}
                     description={project.description}
                     used= {project.used}
                     image={project.img} 
                     link={project.link}/>)
    });
    return(
        <Scroll children={cards}/>
    )
}

export default Projects;