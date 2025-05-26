import "../index.css";
import { useEffect, useState } from "react";

const Weather = () => {

    const [weatherData, setWeatherData] = useState(false)

    const apiKey = '7db065666bb844b729dde5ed8b2016e8';

    const search = async (City) => {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${apiKey}`;

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('City not found');
            
            const data = await res.json();
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name
            })
        }
        catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        search("London")
    }, []);

    return (
        <div className="background h-screen bg-gray-900 flex justify-center items-center">
            <div className="wrapper bg-linear-to-b from-blue-500 to-blue-400 w-[35rem] h-[35rem] rounded-3xl">
                
                <form method="get" className="flex flex-col space-y-5 items-center mt-5">
                    <label className="text-2xl text-white font-bold color" htmlFor="counntry-name">Search the weather for many countries!</label>
                    <div className="flex hover:border-gray-100 text-white border-3 border-white rounded-2xl w-3xs">

                        <input 
                        type="search" 
                        maxLength="30" 
                        placeholder="Type the country name" 
                        className="text-center text-[1.2rem] rounded-2xl w-3xs outline-0 [&::-webkit-search-cancel-button]:hidden"/>
                    
                        <button type="submit" className="cursor-pointer">
                        <i className="bx bx-search relative transition-transform duration-100 ease-in-out
                        hover:text-gray-100 hover:scale-150 right-2/5"></i>
                        </button>

                    </div>
                </form>

                <div className="flex flex-col text-center relative top-[5%]">
                    <i className="bx bxs-sun text-9xl text-yellow-300"></i>
                    <div className="text-3xl text-white mt-5">
                    <p>{}&deg; C</p>
                    <h1>London</h1>
                    </div>

                    <div className="flex flex-row columns-4 space-x-44 mt-[15%] justify-center">

                    <div className="text-white">
                        <i className="bx bxs-droplet text-4xl"></i>
                        <label className="text-2xl">Humidity: {}% </label>
                    </div>

                    <div className="text-white">
                        <i className="bx bx-wind text-4xl"></i>
                        <label className="text-2xl">Wind: {} km/h</label>
                    </div>
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Weather


