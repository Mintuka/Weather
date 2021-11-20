function Hour(props){
    return(
        <div id={`hr_block_${props.id}`} class="col-2" onClick={}>
            <strong id={`hr_${props.id}`} class="d-block">temp</strong>
            <img id={`icon_${props.id}`} alt="icon"/>
            <strong id={`tm_${props.id}`} class="d-block mb-2">Now</strong>
        </div>
    )
}

export default Hour;