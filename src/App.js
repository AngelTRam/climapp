import React from 'react';
import './App.css';
import {  onMessage } from "firebase/messaging";
import { messaging } from "./firebase";
import {  toast } from 'react-toastify';
import { useState } from 'react';






function App() {
  const [isShown, setIsShown ] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('');
  
  const handleSearchText = event => {
    setCity(event.target.value);
  };

  const fetchWeatherData = async (event) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bb8c78d5f15dc590c735529204622ed1&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    handleClick()
    return { data: data, city };
  };
  
  function handleClick(event) {
    setIsShown(true);
  };
  

  const handleFetchData = async () => {
    const newData = await fetchWeatherData();
    setWeatherData([...weatherData, newData]);
    document.getElementById('result').style.display = "block";
    console.log(weatherData);

  };


  React.useEffect(() => {
    onMessage(messaging, message => {
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })

  }, []);

  return (
    <>

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Weather App</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="wrapper">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Ingrese el nombre de la ciudad"
              id="city"
              onChange={handleSearchText}
              value={city}
            />
            <button id="search-btn" onClick={handleFetchData}>Buscar</button>
          </div>
        </div>

        {isShown && (
          <div id="result">
            {weatherData.map(({ data, city }) => (
              <div>
                <h2>{city}</h2>
                <h4 className="weather">{data.weather[0].main}</h4>
                <h4 className="desc">{data.main.description}</h4>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
                <h1>{data.main.temp} &#176;</h1>
                <div className="temp-container">
                  <div>
                    <h4 className="title">min</h4>
                    <h4 className="temp">{data.main.temp_min}&#176;</h4>
                  </div>
                  <div>
                    <h4 className="title">max</h4>
                    <h4 className="temp">{data.main.temp_max}&#176;</h4>
                  </div>
                </div>
              </div>

            ))}
          </div>
        )}
      </div>

      <script src="key.js"></script>
      <script src="script.js"></script>


    </>
  );
}

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

isPushNotificationSupported()

export default App;

