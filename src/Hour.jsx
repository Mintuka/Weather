import {UserContext} from "./App"
import {iconUrl} from "./useFunctions"

function Hour(props){

    return(
        <UserContext.Consumer>
            {   
                (data) => {
                    return(
                        <div className="hr_block col">
                            <strong id={`hr_${props.id}`} className="d-block">
                                {Math.floor(data.hourly[props.id].temp)}<sup>o</sup>C
                            </strong>
                            <img id={`icon_${props.id}`} src={iconUrl + data.hourly[props.id].weather[0].icon + ".png"} alt="icon"/>
                            <strong id={`tm_${props.id}`} className="d-block mb-2">
                                {new Date().getHours() + Number(props.id)}PM
                            </strong>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Hour;