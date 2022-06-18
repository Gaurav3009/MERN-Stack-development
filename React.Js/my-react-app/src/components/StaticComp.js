import React from "react";
import './StaticComp.css';
function StaticComp(){
    return(
        <section>
            <h1 style={{color : "green"}}>Static Components</h1>
            <p id="firstDiv">Hello World count </p>
        </section>
    )
}


// import {StaticComp} from "..filePath"
export default StaticComp // default