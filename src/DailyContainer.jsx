import {Daily} from "./Daily"
import Data from "./data.js"

export function DailyContainer(){
    return(
        <div id="dailyContainer">
            {Data.map(day => <Daily date={day.date} sign={day.sign} one={day.one} two={day.two}/>)}
        </div>
     )        
}