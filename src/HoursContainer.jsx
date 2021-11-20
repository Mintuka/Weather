import { useState } from "react";
import Hour from "./Hour";

function HoursContainer(){
    const hours = useState([1,2,3,4,5,6]);
    return(
        <div class="card-body border-top border-bottom"> 
            <div class="row text-center">
                {
                    hours.map(ele => <Hour id={ele}/>)
                }
            </div>
        </div>
    )
}

export default HoursContainer;