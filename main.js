//Function that generates the image and description of the weather.
function imgAPI(datasAPI){
  const $img_climate = document.querySelector('#img-climate');
  const $description_climate = document.querySelector('#climate-description')
   $img_climate.src = `https://openweathermap.org/img/wn/${datasAPI.weather[0].icon}@2x.png`
    $description_climate.textContent = `${datasAPI.weather[0].description}` ;
}
/*Function that takes the openWeather API and adds some data to the screen such as temperature, city, humidity and wind speed.*/
async function openWeather(cityFunc){
  const apiKey = 'bd9cfb9aa4d36680512af2700948c19e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityFunc}&units=metric&appid=${apiKey}&lang=pt_br`;
  const fetchUrl = await fetch(url);
  const jsonUrl = await fetchUrl.json();
      const $city = document.querySelector('#nameCity');
      const $celsius = document.querySelector('#celsius');
      const $humidity = document.querySelector('#humidity');
      const $wind = document.querySelector('#wind');
    $city.innerHTML = `<i class="bi bi-geo-alt-fill search"></i>${jsonUrl.name}, ${jsonUrl.sys.country}`
    $celsius.innerHTML = `<strong>${parseInt(jsonUrl.main.temp)} ⁰C</strong>`
    $humidity.innerHTML = `<i class="bi bi-droplet-fill"></i>${jsonUrl.main.humidity}%`;
    $wind.innerHTML = `<i class="bi bi-wind"></i>${jsonUrl.wind.speed.toFixed(2)}m/s`
       console.log(jsonUrl)
        imgAPI(jsonUrl)
}
//Function that takes the name of the city to pull its data.
function btnConfirm(e){
  e.preventDefault()
      const $inputCity = document.querySelector('#inputCity');
       openWeather($inputCity.value)
    $inputCity.value = '';
}
document.querySelector('#form').addEventListener('submit', btnConfirm)