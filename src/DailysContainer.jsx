import { useState } from "react";
import Daily from "./Daily";

function DailysContainer(){
    const days = useState([1,2,3,4,5,6,7])

    return(
        <div id="daily_forecast"  className="card_body">
            {
                days.map(ele => <Daily id={ele}/>)
            }
        </div>
    )
}

export default DailysContainer;