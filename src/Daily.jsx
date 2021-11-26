import {UserContext,Url} from "./App"

function Daily(props){

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    const day = (val) => {
        const dayNow = 4;

        if((val + dayNow) > 6)
            return val + dayNow - 7; 
        else{
            return val + dayNow;
        }
    }

    return(
        <UserContext.Consumer>
            {
                (data) => {
                    return(
                        <div className="m-3 p-3 text-center daily" >
                            <p className="mb-1"><strong id={`day_${props.id}`}>{days[day(Number(props.id))]}</strong></p>
                            <Url.Consumer>
                                {
                                    iconUrl => {
                                        return(
                                            <img id={`icon_day_${props.id}`} className="mb-2" src={iconUrl + data.daily[props.id].weather[0].icon + ".png"} alt="icon"/>
                                        )
                                    }
                                }
                            </Url.Consumer>
                            <p id={`main-${props.id}`} className="mb-3">{data ? data.daily[props.id].weather[0].main : "main"}</p>
                            <p id={`temp-${props.id}`} className="mb-2">{data ? data.daily[props.id].temp.day : "temperature"}</p>
                            {props.id === 0 ? <h6 id="today">Today</h6> : null}
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )

}

export default Daily;