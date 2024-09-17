/* User current Location start */
const button = document.getElementById("search-btn");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const description = document.querySelector(".description");
const wind = document.querySelector(".wind");
const visibility = document.querySelector(".visibility");
const humidity = document.querySelector(".humidity");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=24bd1e534f364021885115711242708&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}
async function gotlocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  temp.innerHTML = result.current.temp_c;
  city.innerHTML = result.location.name;
  description.innerHTML = result.current.condition.text;
  wind.innerHTML = `Wind Speed :` + result.current.wind_kph + ` km/h`;
  humidity.innerHTML = `Humidity :` + result.current.humidity + ` %`;
}
function failedToGet() {
  console.log("There was some issue");
}

window.addEventListener("load", async () => {
  navigator.geolocation.getCurrentPosition(gotlocation, failedToGet);
});
/* User current Location end */
