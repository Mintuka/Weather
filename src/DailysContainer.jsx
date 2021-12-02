import Daily from "./Daily";


export function DailysContainer({setSelectedDate}){
    const days = [0,1,2,3,4,5,6];

    return(
        <div id="daily_forecast"  className="card_body" >
            {
                days.map(ele => <Daily key={ele} id={ele} setSelectedDate={setSelectedDate}/>)
            }
        </div>
    )
}
