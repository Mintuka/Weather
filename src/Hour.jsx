import {UserContext,Url} from "./App"

function Hour(props){

    return(
        <UserContext.Consumer>
            {   
                (data) => {
                    return(
                        <div className="hr_block col">
                            <strong id={`hr_${props.id}`} className="d-block">{data ? Math.floor(data.hourly[props.id].temp) : "temp"}<sup>o</sup>C</strong>
                            <Url.Consumer>
                                {
                                    iconUrl => {
                                        return(
                                            data ? <img id={`icon_${props.id}`} src={iconUrl + data.hourly[props.id].weather[0].icon + ".png"} alt="icon"/> : <h3>img</h3>
                                        )
                                    }
                                }
                            </Url.Consumer>
                            <strong id={`tm_${props.id}`} className="d-block mb-2">{new Date().getHours() + Number(props.id)}PM</strong>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    )
}

export default Hour;