function Forecast(){
    return(
        <div id="bg" class="card_header text-center">
            <p id="name" class="h2 mb-1">Location</p>
            <p id="description" class="mb-1">description</p>
            <p id="main" class="mb-1">main</p>
            <p id="temp" class="display-1 mb-1">temp</p>
            <span>Pressure: <span id="pressure"></span></span>
            <span class="mx-2">|</span>
            <span>humidity: <span id="humidity"></span></span>
        </div>
    )
}

export default Forecast;