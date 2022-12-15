const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "91f7b516f3msh6d01289d8f3347ap1fb5e4jsne11daff8ab15",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWheather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunset.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunrise.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};


const getWheatherForShanghai = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Cloud_pcts.innerHTML = response.cloud_pct;
      temps.innerHTML = response.temp;
      feels_likes.innerHTML = response.feels_like;
      humiditys.innerHTML = response.humidity;
      min_temps.innerHTML = response.min_temp;
      max_temps.innerHTML = response.max_temp;
      wind_degreess.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunsets.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunrises.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};

const getWheatherForMumbai = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Cloud_pctm.innerHTML = response.cloud_pct;
      tempm.innerHTML = response.temp;
      feels_likem.innerHTML = response.feels_like;
      humiditym.innerHTML = response.humidity;
      min_tempm.innerHTML = response.min_temp;
      max_tempm.innerHTML = response.max_temp;
      wind_degreesm.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunsetm.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunrisem.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};
const getWheatherForLucknow = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Cloud_pctl.innerHTML = response.cloud_pct;
      templ.innerHTML = response.temp;
      feels_likel.innerHTML = response.feels_like;
      humidityl.innerHTML = response.humidity;
      min_templ.innerHTML = response.min_temp;
      max_templ.innerHTML = response.max_temp;
      wind_degreesl.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunsetl.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunrisel.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};
const getWheatherForKolkata = (city) => {
 
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Cloud_pctk.innerHTML = response.cloud_pct;
      tempk.innerHTML = response.temp;
      feels_likek.innerHTML = response.feels_like;
      humidityk.innerHTML = response.humidity;
      min_tempk.innerHTML = response.min_temp;
      max_tempk.innerHTML = response.max_temp;
      wind_degreesk.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunsetk.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunrisek.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};
const getWheatherForHyderabad = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Cloud_pcth.innerHTML = response.cloud_pct;
      temph.innerHTML = response.temp;
      feels_likeh.innerHTML = response.feels_like;
      humidityh.innerHTML = response.humidity;
      min_temph.innerHTML = response.min_temp;
      max_temph.innerHTML = response.max_temp;
      wind_degreesh.innerHTML = response.wind_degrees;
      let time=new Date(response.sunset*1000)
      sunseth.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
      let time1=new Date(response.sunrise*1000);
      sunriseh.innerHTML = time1.getHours()+":"+time1.getMinutes()+":"+time1.getSeconds();
    })
    .catch((err) => console.error(err));
};

window.onload = function () { 

getWheatherForShanghai("Shanghai");
getWheatherForMumbai("Mumbai");
getWheatherForLucknow("Lucknow");
getWheatherForKolkata("Kolkata");
getWheatherForHyderabad("Hyderabad");
  
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWheather(city.value);
});



getWheather("Delhi");
