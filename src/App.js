import Forecast from "./Forecast";
import HoursContainer from "./HoursContainer"
import DailysContainer from "./DailysContainer"
import { createContext } from "react";
import useFetch from "./useFetch";

export const UserContext = createContext();
export const Url = createContext();

export function App() {
  let weatherUrl = "https://api.openweathermap.org/data/2.5/onecall?"
  let latitude   = "lat=9.005401&"
  let longtude   = "lon=38.763611&"
  let options    = "units=metric&exclude=minutely,alerts&"
  let apiKey     = "appid=48e3c795ac6af39bb7afbf3888fa746c"

  let query = weatherUrl + latitude + longtude + options + apiKey;
  
  const [data] = useFetch(query);
  const iconUrl = "http://openweathermap.org/img/wn/";


  if(!data)
    return (
      <h1>Some thing went wrong</h1>
    );

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center text-white">
        <div className="col-md-8">
          <UserContext.Provider value={data}>
            <Forecast/>
            <Url.Provider value = {iconUrl}>
              <HoursContainer/>
              <DailysContainer/>
            </Url.Provider>
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
}


