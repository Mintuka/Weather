import {UserContext} from "./App"

function Forecast(){

    return(
        <UserContext.Consumer>
            {
                data => {
                    var current = {
                        main : data.current.weather[0].main,
                        description : data.current.weather[0].description,
                        temp : data.current.temp,
                        pressure : data.current.pressure,
                        humidity : data.current.humidity,
                        name : "Addis Ababa"
                      }
                    return(
                        <div id="bg" className="card_header text-center">
                            <p id="name" className="h2 mb-1">{data ? current.name : "Place Name"}</p>
                            <p id="description" className="mb-1">{data ? current.description : "description"}</p>
                            <p id="main" className="mb-1">{data ? current.main : "main"}</p>
                            <p id="temp" className="display-1 mb-1">{data ? current.temp : "temp"}</p>
                            <span>Pressure: <span id="pressure">{data ? current.pressure : "0"}</span></span>
                            <span class="mx-2">|</span>
                            <span>humidity: <span id="humidity">{data ? current.pressure : "0"}</span></span>
                        </div>
                    )

                }
            }
        </UserContext.Consumer>

    )
}

export default Forecast;