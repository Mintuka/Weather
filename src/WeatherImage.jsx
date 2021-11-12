import {useEffect} from 'react'
function WeatherImage(){
    function canva(){
        document.getElementById("imageContainer").style.background = "red";
    }
    useEffect(() => {
            canva()
        }
        ,[]
    )
    return(
        <div id="weatherImage" >
            <canvas id="imageContainer">
                
            </canvas>
                Hello Weather
        </div>
    )
}
export default WeatherImage;