const inputbox = document.querySelector(".input_Box")
const searchbtn = document.getElementById("searchbutton")
const weatherimg = document.querySelector(".weatherImage")
const temp = document.querySelector(".Temperature")
const des = document.querySelector(".Description")
const hum =document.getElementById("Humidity")
const winsp = document.getElementById("Wind_Speed")
searchbtn.addEventListener("click",()=>{
    checkwheather(inputbox.value)
})
async function checkwheather(city){
const myapikey="ee9f7172f47a830210bac0f338189c06"
const myurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapikey}`
// Here we will use the fetch function to carry the value from the url
const weatherdata = await fetch(`${myurl}`)
.then(response=>response.json())
temp.innerHTML=`${Math.round(weatherdata.main.temp-273)}&degC`
des.innerHTML=`${weatherdata.weather[0].description}`
console.log(weatherdata)
winsp.innerHTML=`${weatherdata.wind.speed}km/h`
hum.innerHTML=`${weatherdata.main.humidity}%`
// Here , We Will Use Case Steps For Weather
switch(weatherdata.weather[0].main){
    case 'Mist':
        weatherimg.src="6-44-7t.jpg";
        
        break
    case 'Haze':
        weatherimg.src="haze.jpg";
        break
    case 'Clouds':
        weatherimg.src="clip-clouds-12.jpg"
        break
    case 'Clear':
        weatherimg.src="2897.png"
        break
    case 'Fog':
        weatherimg.src="fog.jpg"
}
}


