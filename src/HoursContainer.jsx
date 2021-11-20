import { useState } from "react";
import Hour from "./Hour";

function HoursContainer(){
    const [hours,setHours] = useState([1,2,3,4,5,6]);
    return(
        <div id="hours_container" className="card-body border-top border-bottom"> 
            <div className="row text-center">
                {
                    hours.map(ele => <Hour id={ele}/>)
                }
            </div>
        </div>
    )
}

export default HoursContainer;