import { useEffect } from "react";
import {UserContext} from "./App"
import {day,days,iconUrl,dataFetched,handleDaily} from "./useFunctions"

function Daily(props){

    useEffect(() => {
        document.getElementById("daily_0").className = "m-3 p-3 text-center current";
    },[])
    return(
        <UserContext.Consumer>
            {
                (data) => {
                    var current = {};
                    current = dataFetched(props.id,data);

                    return(
                        <div id={`daily_${props.id}`} className="m-3 p-3 text-center dailyWeather" onClick={() => handleDaily(props.id,props.setSelectedDate)}>
                            <p className="mb-1"><strong id={`day_${props.id}`}>{days[day(Number(props.id))]}</strong></p>
                            <img id={`icon_day_${props.id}`} className="mb-2" src={iconUrl + current.icon + ".png"} alt="icon"/>
                            <p id={`main-${props.id}`} className="mb-3">{current.main}</p>
                            <p id={`temp-${props.id}`} className="mb-2">{current.temp}</p>
                            {props.id === 0 ? <h6 id="today">Today</h6> : null}
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Daily;