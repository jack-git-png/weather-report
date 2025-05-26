import './index.css'
import 'boxicons/css/boxicons.min.css';
import CurrentWeather from './Components/theWeather';

function App() {

  return (
    <div className="background h-screen bg-gray-900 flex justify-center items-center">
      <div className="wrapper bg-linear-to-tl from-cyan-200 to-blue-500 w-[35rem] h-[35rem] rounded-3xl items-center content-center text-center">

          <CurrentWeather/>

          <form method="get" className="flex flex-col space-y-5 items-center">
              <label className="text-2xl text-white font-bold color" htmlFor="counntry-name">Search the weather for many countries!</label>

              <div className="flex hover:border-gray-100 text-white border-3 border-white rounded-2xl w-3xs">
                <input 
                type="search" 
                maxLength="30" 
                placeholder="Type the country name" 
                className="text-center text-[1.2rem] rounded-2xl w-3xs outline-0"/>
              
                <button type="submit" className="cursor-pointer">
                   <i className="bx bx-search relative transition-transform duration-100 ease-in-out
                 hover:text-gray-100 hover:scale-150 right-2/5"></i>
                </button>
              </div>
          </form>

      </div>
    </div>
  )

}

export default App
