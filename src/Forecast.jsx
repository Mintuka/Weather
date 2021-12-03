import { useEffect, useState } from "react/cjs/react.development";
import {UserContext} from "./App"
import {date,dataFetched,days,iconUrl} from "./useFunctions"

function Forecast(props){
    let time = new Date();
    const [dailyColor,setDailyColor] = useState("orangered");
  
    useEffect(() => {
        if(props.selectedDate > 0){
            setDailyColor("yellowgreen");
        }
        else{
            setDailyColor("orangered")
        }
    },[props.selectedDate]);
    return(
        
        <UserContext.Consumer>
            
            {
                data => {
                    var current = {};
                    current = dataFetched(props.selectedDate,data);

                    return(
                        <div id="bg" className="p-3">
                            <div className="card_header">
                                <p id="name" className="h4 mb-1">{current.name}</p>
                                <p id="update_info"><small>updated an hour ago</small> </p>
                                <div className="info_container">
                                    <div className="flex_container">
                                    <img id="forecast_img" src={iconUrl + current.icon + ".png"} alt="icon"/>
                                    <p id="temp" className="display-3 mb-1">{<b>{Math.floor(current.temp)}</b>}<sup>o</sup><small>C</small></p>
                                    </div>
                                    <div className="flex_container">
                                        <p id="description" className="mb-1 display-6">{current.description}</p>
                                        <p id="date" style={{color:`${dailyColor}`}}>{date(days,props.selectedDate,time)}</p>
                                    </div>
                                    <div className="flex_container">
                                        <span className="press_humid">Pressure : <span id="pressure">{current.pressure}</span></span>
                                        <span className="mx-2 ">|</span>
                                        <span className="press_humid">humidity : <span id="humidity">{current.humidity}</span></span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Forecast;