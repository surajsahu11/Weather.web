const apiKey = "b999e3044003301ac95b72955ba6ab63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weathericon = document.querySelector('.weather-icon')

async function chakeweather(city){
    const response = await fetch(apiUrl+ city+`&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.error').style.display ='block'
        document.querySelector('.weather').style.display ='none'
    }else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
        document.querySelector(".wind").innerHTML= data.wind.speed + 'Km/h';
        
    if (data.weather[0].main=='Clouds')  {
        weathericon.src = 'images/Clouds.png'
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src = "images/Clear.png"
    }
    else if(data.weather[0].main=='Drizzle'){
        weathericon.src = 'images/Drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        weathericon.src = 'images/Mist.png'
    }
    else if(data.weather[0].main=='Rain'){
        weathericon.src = 'images/Rain.png'
    }
    else if(data.weather[0].main=='Snow'){
        weathericon.src = 'images/Snow.png'
    }
    
    document.querySelector(".weather").style.display = 'block'
    document.querySelector('.error').style.display ='none'

    }
}

searchbtn.addEventListener('click',()=>{
chakeweather(searchbox.value)
})