    //handle events when each daily component is clicked 
export const handleDaily = (value,setSelectedDate) =>{
        //off the previously clicked DailyComponent
        let current = document.getElementsByClassName("current");
        for(let val of current)
            val.className = "m-3 p-3 text-center dailyWeather";
        //on the clicked DailyComponent
        let clicked = document.getElementById(`daily_${value}`);
        clicked.className = "m-3 p-3 text-center current";

        setSelectedDate(value);
    }

export const day = (val) => {
    const dayNow = new Date().getDay();

    if((val + dayNow) > 6)
        return val + dayNow - 7; 
    else{
        return val + dayNow;
    }
}

export const date = (days,selectedDate,time) =>{
    let dayVal      =   days[day(selectedDate)];
    let dateVal     =   time.getDate();     if(dateVal < 10)    dateVal     = "0"+dateVal;
    let hourVal     =   time.getHours();    if(hourVal < 10)    hourVal     = "0"+hourVal;
    let minuteVal   =   time.getMinutes();  if(minuteVal < 10)  minuteVal   = "0"+minuteVal;
    let modeVal     =   time.getUTCHours(); (modeVal < 15) ? modeVal = " am" : modeVal = " pm";
    if(selectedDate === 0)
        return dayVal.slice(0,3) + " " + dateVal +", "+ hourVal + ":" + minuteVal +  modeVal;
    else return dayVal;
}

export const dataFetched = (selectedDate,data) => {
    var current = {};
    
            if(selectedDate === 0)
                current = {
                    description : data ? data.current.weather[0].description : "description",
                    icon: data ? data.current.weather[0].icon : "icon",
                    temp : data ? data.current.temp : 20,
                    pressure : data ? data.current.pressure : 100,
                    humidity : data ? data.current.humidity : 30,
                    name : "Addis Ababa"
                }
            else{
                current = {
                    description : data ? data.daily[selectedDate].weather[0].description : "descr",
                    icon: data ? data.daily[selectedDate].weather[0].icon : "icon",
                    temp : data ? data.daily[selectedDate].temp.day : 25,
                    pressure : data ? data.daily[selectedDate].pressure : 105,
                    humidity : data ? data.daily[selectedDate].humidity : 35,
                    name : "Addis Ababa"
                }
            }
            console.log("dataFetched",data);
    return current;
}

export const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const iconUrl = "http://openweathermap.org/img/wn/";
  