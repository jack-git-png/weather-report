import "../index.css";
import { useState } from "react";

function CurrentWeather() {
    
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const apiKey = '7db065666bb844b729dde5ed8b2016e8';

    const fetchWeather = async (event) => {
        event.preventDefault();
        if (!city) return;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('City not found');

            const data = await res.json();
            setWeather(data);
        }
        catch (err) {
            alert(err.message);
            setWeather(null);
        }
    };

    return (
        <div>
            

        </div>
    )

}


export default CurrentWeather


