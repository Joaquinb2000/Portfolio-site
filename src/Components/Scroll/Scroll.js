import React from 'react'
import './Scroll.css'

const Scroll= ({children}) =>{
    return (
        <div id= "scroll" style= {{overflowX:"auto", display:"flex", flexWrap:"nowrap", border: '1px solid black'}}>
            {children}
        </div>
    );
}

export default Scroll;