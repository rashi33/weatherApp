//f551ed1fb0c82fa274ea5a7728caf7d1
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=f551ed1fb0c82fa274ea5a7728caf7d1

async function weather(){
    let city=document.querySelector('#search>input').value;
    console.log(city);
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=f551ed1fb0c82fa274ea5a7728caf7d1";
  console.log(url);
  const res=await fetch(url);
  const data=await res.json();
  console.log(data);
  temp.innerHTML=Math.round(data.main.temp)+"°C";
  cityname.innerHTML=data.name;
  humidity.innerHTML=data.main.humidity+"%";
  wind.innerHTML=data.wind.speed+"km/hr";
  if(data.weather[0].main=="Mist"){
    document.querySelector('#main>img').src="img/mist.png";
  }
  if(data.weather[0].main=="Clear"){
    document.querySelector('#main>img').src="img/clear.png";
  }
  if(data.weather[0].main=="Clouds"){
    document.querySelector('#main>img').src="img/clouds.png";
  }
  if(data.weather[0].main=="Drizzle"){
    document.querySelector('#main>img').src="img/drizzle.png";
  }
  if(data.weather[0].main=="Snow"){
    document.querySelector('#main>img').src="img/snow.png";
  }
  if(data.weather[0].main=="Haze"){
    document.querySelector('#main>img').src="img/haze.png";
  }
  if(data.weather[0].main=="Rain"){
    document.querySelector('#main>img').src="img/rain.png";
  }
}