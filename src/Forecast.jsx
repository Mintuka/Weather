function Forecast(){
    return(
        <div class="card_header text-center">
            <p id="name" class="h2 mb-1"></p>
            <p id="description" class="mb-1"></p>
            <p id="main" class="mb-1"></p>
            <p id="temp" class="display-1 mb-1"></p>
            <span>Pressure: <span id="pressure"></span></span>
            <span class="mx-2">|</span>
            <span>humidity: <span id="humidity"></span></span>
        </div>
    )
}

export default Forecast;