import React from "react";

const Draggable = ({children, hasImages}) =>{
    let position= {x:0, y:0};

    const withinViewport = ((offset, space)=>{
      const { screen, target }= space;

      if (offset>=0)
        return (screen-offset>target ? offset : screen-target-20);

      else
        return (screen+offset>target ? 0: offset);
    })

    const dragStart= (event)=>{
      const {x, y}= event.target.getBoundingClientRect();
      const newPosition= {
        x: event.clientX - x,
        y: event.clientY - y
      }
      position= newPosition;
    }

    const dragEnd= (event)=>{
      if (!(['github', 'linkedin', 'email'].includes(event.target.id)))
        event.target.style.position= "absolute";

      const {clientHeight, clientWidth} = event.target;
      const {outerWidth, outerHeight}= event.view;
      const {pageX, pageY} = event;
      const {x, y} = position;
      const element= event.target;

      const spaceX={
        screen: outerWidth,
        target: clientWidth,
      }

      const spaceY={
        screen: outerHeight,
        target: clientHeight,
      }

      const offsetX=  withinViewport(pageX - x, spaceX);
      const offsetY=  withinViewport(pageY - y, spaceY);

      element.style.top = offsetY + "px";
      element.style.left= offsetX + "px";
    }

    document.addEventListener("dragover", function(event) {
      event.preventDefault();
      event.target.style.background="opacity=0";
    });


    return(
        <div id="Drag" onDragStart={dragStart} onDragEnd={dragEnd} draggable="true" style={{cursor:"grab"}}>
            {children}
        </div>
    )
}

export default Draggable;
