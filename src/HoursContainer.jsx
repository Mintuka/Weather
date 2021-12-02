import { useState } from "react";
import {CgToggleSquare, CgToggleSquareOff} from 'react-icons/cg'
import Hour from "./Hour";

function HoursContainer(){
    const[toggle,setToggle] = useState(false);
    const hours = [0,1,2,3,4,5];
    
    if(!toggle)
        return(
            <div id="hours_container" className="card-body">
                <CgToggleSquare id="toggle" onClick={() => setToggle(true)}>T</CgToggleSquare>
                <div className="row text-center">
                    {
                        hours.map(ele => <Hour key={ele} id={ele}/>)
                    }
                </div>
            </div>
        )
    else{
        return(
            <div id="hours_container" className="card-body">
                <CgToggleSquareOff id="toggle" onClick={() => setToggle(false)}>T</CgToggleSquareOff>
                <br/>
                <div className="row text-center slide">
                    <input className="my-4" type="range" min="1" max="60"/>
                    {hours.map(ele => <h4 className="col">{ele}PM</h4>)}
                </div>
            </div>
        )   
    }
}

export default HoursContainer;