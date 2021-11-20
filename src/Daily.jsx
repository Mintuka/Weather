function Daily(props){
    <div className="m-3 p-3 text-center daily" onClick={}>
        <p><strong id={`day_${props.id}`}>Today</strong></p>
        <img id={`icon_day_${props.id}`} alt="icon"/>
        <p id={`main-${props.id}`}>main</p>
        <p id={`temp-${props.id}`}>main</p>
    </div>
}

export default Daily;