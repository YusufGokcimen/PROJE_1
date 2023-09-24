import { useEffect, useState } from "react";
import axios from "axios";

import "./MyState.css";

import rainy from "./static/rainy-1.svg";
import day from "./static/day.svg";

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `e3a22fdbdde8394a17e89d9b2784c6f5`;

// lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

function MyState() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    if (weather === null) {
      const lang = navigator?.language?.split("-")[0];
      let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}&lang=${lang}&units=metric`;
      async function Location() {
        try {
          let locationResult = await axios.get(finalAPIEndPoint, {
            timeout: 1000,
          });
          setWeather(locationResult.data);
        } catch (error) {
          if (error.response.status === 429) {
            console.error("API yanıtı başarısız");
          }
        }
      }
      Location();
    }
  }, [weather, latitude, longitude]);

  console.log("WEATHER:", weather);
  return (
    <div className="container-weather">
      <div className="card" id="sky-color">
        <div className="img-container">
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt="resim"
          />
        </div>

        <h4 className="konum">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#610a17"
            viewBox="0 0 256 256"
          >
            <path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path>
          </svg>
          {`KONUM: ${weather?.name}`}
        </h4>

        <header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M160,40A88.09,88.09,0,0,0,81.29,88.67,64,64,0,1,0,72,216h88a88,88,0,0,0,0-176Zm0,160H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.11A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,72,72Z"></path>
          </svg>
          {`Hava Durumu: ${weather?.weather[0].description}`}
        </header>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#c59ba2"
            viewBox="0 0 256 256"
          >
            <path d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,80H104V40a16,16,0,0,1,32,0Z"></path>
          </svg>
          {`Minimum Sıcaklık: ${weather?.main?.temp_min} °C`}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#775056"
            viewBox="0 0 256 256"
          >
            <path d="M160,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM128,24a16,16,0,0,1,16,16V80H112V40A16,16,0,0,1,128,24Z"></path>
          </svg>
          {`Hava Sıcaklığı: ${weather?.main?.temp} °C`}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#990017"
            viewBox="0 0 256 256"
          >
            <path d="M177.41,80.54a8,8,0,0,1,2.05-11.12c10.4-7.18,26.68-7.18,37.08,0,5,3.47,13.88,3.47,18.92,0a8,8,0,0,1,9.08,13.16,34.64,34.64,0,0,1-37.08,0c-5-3.47-13.88-3.47-18.92,0A8,8,0,0,1,177.41,80.54Zm58.05,20.88c-5,3.47-13.88,3.47-18.92,0-10.4-7.18-26.68-7.18-37.08,0a8,8,0,1,0,9.08,13.16c5-3.47,13.88-3.47,18.92,0a34.64,34.64,0,0,0,37.08,0,8,8,0,0,0-9.08-13.16ZM176,192a56,56,0,1,1-88-45.92V40a32,32,0,0,1,64,0V146.08A56,56,0,0,1,176,192ZM136,40a16,16,0,0,0-32,0V80h32Z"></path>
          </svg>
          {`Maksimum Sıcaklık: ${weather?.main?.temp_max} °C`}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
          </svg>
          {`Hissedilen: ${weather?.main?.feels_like}`}
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"></path>
          </svg>
          {`Rüzgar Hızı: ${weather?.wind.speed} km/s`}
        </span>
        <hr />
        <span>
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#44403c"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z"></path>
            </svg>
          }{" "}
          TARİH : {new Date().toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default MyState;
