import { useEffect } from "react";
import {UserContext,Url} from "./App"

function Daily(props){

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    //handle events when each daily component is clicked 
    const handleDaily = (value) =>{
        //off the previously clicked DailyComponent
        let current = document.getElementsByClassName("current");
        for(let val of current)
            val.className = "m-3 p-3 text-center dailyWeather";
        //on the clicked DailyComponent
        let clicked = document.getElementById(`daily_${value}`);
        clicked.className = "m-3 p-3 text-center current";

        props.setSelectedDate(value);
    }

    const day = (val) => {
        const dayNow = new Date().getDay();

        if((val + dayNow) > 6)
            return val + dayNow - 7; 
        else{
            return val + dayNow;
        }
    }

    useEffect(() => {
        document.getElementById("daily_0").className = "m-3 p-3 text-center current";
    },[])
    return(
        <UserContext.Consumer>
            {
                (data) => {
                    return(
                        <div id={`daily_${props.id}`} className="m-3 p-3 text-center dailyWeather" onClick={() => handleDaily(props.id)}>
                            <p className="mb-1"><strong id={`day_${props.id}`}>{days[day(Number(props.id))]}</strong></p>
                            <Url.Consumer>
                                {
                                    iconUrl => {
                                        return(
                                           data ? <img id={`icon_day_${props.id}`} className="mb-2" src={iconUrl + data.daily[props.id].weather[0].icon + ".png"} alt="icon"/> : <h3>img</h3>
                                        )
                                    }
                                }
                            </Url.Consumer>
                            <p id={`main-${props.id}`} className="mb-3">{data ? data.daily[props.id].weather[0].main : "main"}</p>
                            <p id={`temp-${props.id}`} className="mb-2">{data ? data.daily[props.id].temp.day : "temp"}</p>
                            {props.id === 0 ? <h6 id="today">Today</h6> : null}
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Daily;