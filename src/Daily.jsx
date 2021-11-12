import React from "react";

export function Daily(props){
    return(
        <div className="daily">
            <div className="dailyTop"></div>
            <p>{props.date}</p>
            <p>{props.sign}</p>
            <p>{props.one}<sup>o</sup>C</p>
            <p>{props.two}<sup>o</sup>C</p>
        </div>
    )
}

