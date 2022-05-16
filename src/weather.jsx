import axios from 'axios';
import './weather.css';
import React, {useState, useEffect} from "react"

export default function ShowWeather() {
    const [weather, setWeather] = useState({});
    
    useEffect( () => { 
        async function fetchData() {
            try {
                let res = await axios.get('https://api.open-meteo.com/v1/forecast', {
                    params:{
                        'latitude': 52.52,
                        //  function getLatitude() {
                        //     let position = getLocation();
                        //     return position.latitude;
                        // },  
                        'longitude': 13.41,
                        // function getLongitude() {
                        //     let position = getLocation();
                        //     return position.longitude;
                        // }, 
                        'current_weather':true,
                    },
                }); 
                setWeather(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    // function getLocation() {
    //     let pos = {};
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             pos.latitude = position.coords.latitude;
    //             pos.longitude = position.coords.longitude;
    //             return pos;
    //         });
    //     } else {
    //         console.log("Geolocation is not supported by this browser.");
    //         //Fallback Berlin
    //         pos.latitude = 52.52;
    //         pos.longitude = 13.41;
    //     }
    //   }

    if(weather.current_weather) {
        return <>
            <div id="weather_wrapper">
                <div className="weatherCard">
                    <div className="currentTemp">
                        <span className="temp">{weather.current_weather.temperature}&deg;</span>
                        <span className="location">Berlin</span>
                    </div>
                    <div className="currentWeather">
                        <span className="conditions">&#xf00d;</span>
                        <div className="info">
                            <span className="rain">{weather.current_weather.weathercode}</span> 
                            <span className="wind">{weather.current_weather.windspeed}km/h</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}