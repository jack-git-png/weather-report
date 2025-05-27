import "../index.css";
import { useEffect, useState } from "react";

const Weather = () => {

    const [weatherData, setWeatherData] = useState({
        humidity: '',
        windSpeed: '',
        temperature: '',
        location: '',
        icon: ''
    });
    const [inputValue, setInputValue] = useState("");

    const apiKey = '7db065666bb844b729dde5ed8b2016e8';

    const search = async (City) => {
        if (!City) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${apiKey}`;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('City not found');
            
            const data = await res.json();
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: data.weather[0].icon
            });
            return data;
        } catch (err) {
            alert(err.message);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        search(inputValue);
    };

    useEffect(() => {
        search("London");
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url(https://t3.ftcdn.net/jpg/09/10/71/50/360_F_910715073_m9bF5mHxRv5KnmYexftHy9cjRDLe6HkH.jpg)`
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundSize = "cover"
    },[])

    return (
        <div className="background h-screen flex justify-center items-center">
            <div className="wrapper w-[35rem] h-[35rem] bg-white/15 backdrop-blur-xl backdrop-saturate-150 rounded-2xl shadow-xl p-5 text-white">   
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5 items-center mt-5">
                    <label className="text-2xl text-white font-bold color" htmlFor="counntry-name">Search the weather for many countries!</label>
                    <div className="flex hover:border-gray-100 text-white border-3 border-white rounded-2xl w-3xs">

                        <input
                        type="search"
                        maxLength="30" 
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type the country name" 
                        className="text-center text-[1.2rem] rounded-2xl w-3xs outline-0 [&::-webkit-search-cancel-button]:hidden"/>
        
                        <button onClick={handleSubmit} type="submit" className="cursor-pointer">
                            <i className="bx bx-search relative transition-transform duration-100 ease-in-out
                            hover:text-gray-100 hover:scale-150 right-2/5"></i>
                        </button>

                    </div>
                </form>

                <div className="flex flex-col items-center text-center relative top-[5%]">
                        <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}  className="w-40"></img>
                    <div className="text-3xl text-white mt-2">
                        <p>{weatherData.temperature}&deg; C</p>
                        <h1>{weatherData.location}</h1>
                    </div>

                    <div className="flex space-x-40 mt-[10%] justify-center">

                        <div className="text-white">
                            <i className="bx bxs-droplet text-4xl"></i><br />
                            <label className="text-2xl">Humidity {weatherData.humidity}%</label>
                        </div>

                        <div className="text-white">
                            <i className="bx bx-wind text-4xl"></i><br />
                            <label className="text-2xl">Wind {weatherData.windSpeed} km/h</label>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;

