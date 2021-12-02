import {UserContext,Url} from "./App"

function Forecast(props){
    let time = new Date(`${new Date().getFullYear()}`);
    return(
        <UserContext.Consumer>
            {
                data => {
                    var current = {};
                    if(props.selectedDate === 0)
                        current = {
                            description : data ? data.current.weather[0].description : "description",
                            icon: data ? data.current.weather[0].icon : "icon",
                            temp : data ? data.current.temp : 20,
                            pressure : data ? data.current.pressure : 100,
                            humidity : data ? data.current.humidity : 30,
                            name : "Addis Ababa"
                        }
                    else{
                        current = {
                            description : data ? data.daily[props.selectedDate].weather[0].description : "descr",
                            icon: data ? data.daily[props.selectedDate].weather[0].icon : "icon",
                            temp : data ? data.daily[props.selectedDate].temp.day : 25,
                            pressure : data ? data.daily[props.selectedDate].pressure : 105,
                            humidity : data ? data.daily[props.selectedDate].humidity : 35,
                            name : "Addis Ababa"
                        }
                    }
                    return(

                        <div id="bg" className="p-3">
                            <div className="card_header">
                                <p id="name" className="h4 mb-1">{current.name}</p>
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
                                        <p id="temp" className="display-3 mb-1">{<b>{Math.floor(current.temp)}</b>}<sup>o</sup><small>C</small></p>
                                    </div>
                                    <div className="flex_container">
                                        <p id="description" className="mb-1 display-6">{current.description}</p>
                                        <p id="date">{"Fri"}{" "}{time.getDate()}{", "}{time.getHours()}{":"}{time.getMinutes()} Pm</p>
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