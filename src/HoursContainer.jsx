
import Hour from "./Hour";

function HoursContainer(){
    const hours = [0,1,2,3,4,5];
    return(
        <div id="hours_container" className="card-body">
            <b id="toggle">T</b>
            <div className="row text-center">
                {
                    hours.map(ele => <Hour key={ele} id={ele}/>)
                }
            </div>
        </div>
    )
}

export default HoursContainer;