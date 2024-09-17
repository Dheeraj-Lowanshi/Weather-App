/* Search City Data start */
let urlstart = "https://api.openweathermap.org/data/2.5/weather?q=";
let urlend = "&appid=97a9745b0c3a1f932357060a2331ab49&units=metric";
let result = document.getElementById("result");
let btn = document.getElementById("search-btn");
btn.addEventListener("click", () => {
  let city = `Delhi`;
  city = document.getElementById("inp-word").value;
  if (city.length == 0) {
    alert(`Please type in a city name`);
  }
  window.addEventListener("load", () => {
    fetch(`${urlstart}${city}${urlend}`)
      .then((response) => response.json())
      .then((data) => {
        const description = data.weather[0].description;
        console.log(data);
        result.innerHTML = `      
        <div id="city-name"><i class="fa-solid fa-city icon"></i> City : ${data.name}</div>
        <div id="temperature"><i class="fa-solid fa-temperature-three-quarters icon"></i> Temperature : ${data.main.temp} °C</div>
        <div id="description"><i class="fa-solid fa-cloud icon"></i> Discription : ${data.weather[0].description}</div>
        <div id="humidity"><i class="fas fa-snowflake icon"></i> Humidity : ${data.main.humidity} %</div>
        <div id="wind"><i class="fa-solid fa-wind icon"></i> Wind Speed : ${data.wind.speed} Km/h</div>
        <div id="visibility"><i class="fa-solid fa-eye icon"></i> Visibility : ${data.visibility} Meter </div>
        `;
      })
      .catch((error) => {
        result.innerHTML = `
      <div id="word">
          <h3>${`Could't find weather`}</h3>
      </div>`;
      });
  });
});
/* Search City Data End */
