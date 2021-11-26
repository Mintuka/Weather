import {UserContext,Url} from "./App"

function Forecast(props){
    let time = new Date();
    return(
        <UserContext.Consumer>
            {
                data => {
                    var current = {
                        description : data.current.weather[0].description,
                        icon: data.current.weather[0].icon,
                        temp : data.current.temp,
                        pressure : data.current.pressure,
                        humidity : data.current.humidity,
                        name : "Addis Ababa"
                      }
                    return(

                        <div id="bg" className="p-3">
                            <div className="card_header">
                                <p id="name" className="h4 mb-1">{data ? current.name : "Place Name"}</p>
                                <p id="update_info"><small>updated an hour ago</small> </p>
                                <div className="info_container">
                                    <div className="flex_container">
                                        <Url.Consumer>
                                        {
                                            iconUrl => {
                                                return(
                                                    <img src={iconUrl + current.icon + ".png"} alt="icon"/>
                                                )
                                            }
                                        }
                                        </Url.Consumer>
                                        <p id="temp" className="display-3 mb-1">{data ? <b>{Math.floor(current.temp)}</b> : "temp"}<sup>o</sup><small>C</small></p>
                                    </div>
                                    <div className="flex_container">
                                        <p id="description" className="mb-1 display-6">{data ? current.description : "description"}</p>
                                        <p id="date">{"Fri"}{" "}{time.getDate()}{", "}{time.getHours()}{":"}{time.getMinutes()} Pm</p>
                                    </div>
                                    <div className="flex_container">
                                        <span className="press_humid">Pressure : <span id="pressure">{data ? current.pressure : "0"}</span></span>
                                        <span className="mx-2 ">|</span>
                                        <span className="press_humid">humidity : <span id="humidity">{data ? current.humidity : "0"}</span></span>
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