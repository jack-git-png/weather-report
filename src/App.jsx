import './index.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
  })
  return (
    <div className="background h-screen bg-gray-900 flex justify-center items-center">
      <div className="wrapper bg-[#414141] w-[35rem] h-[35rem] rounded-3xl items-center content-center text-center">
        <form method="get">
          <label className="text-2xl text-white font-bold color" htmlFor="counntry-name">Search the weather for many countries!</label><br />
          <input type="search" className="border-2 border-white text-2xl rounded-2xl"/>
        </form>
      </div>
    </div>
  )
}

export default App
