import React from 'react'
import realtime from "../assets/real-time.png"
import filtering from "../assets/filtering.png"
import watchlist from "../assets/watchlist.png"
import historical from "../assets/historical.png"
import trending from "../assets/trending.png"
import { useNavigate } from 'react-router-dom'
const HomeHero = () => {

  const navigate = useNavigate();

  const navigateCrypto = ()=>{
      navigate('/crypto');
  }

      return (
        <div className="relative w-full h-full flex flex-col justify-center items-center  overflow-hidden">
    
          <div className=" md:pt-16 w-full flex flex-col lg:flex-row">
            {/* :HERO MAIN */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600"> {/* Container */}
              {/* ::Hero Inner */}
              <div className="p-5 md:ml-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                {/* Hero Title */}
                <h1 className="py-10 text-xl font-light tracking-wide leading-tight  capitalize font-nunito">Find your crypto gem with Crypto<span className=' text-cyan'>Crawler</span>!</h1>
                
                {/* Starting Price */}
                <p className="  text-md text-gray-100 md:w-[80%] font-nunito">CryptoCrawler is a comprehensive cryptocurrency analysis platform harnesses the power of cutting-edge technology to provide real-time data, comprehensive analysis, and intuitive tools to help you navigate the complex world of cryptocurrencies.</p>
                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center">
                  <button onClick={navigateCrypto} className="m-1.5 py-2.5 px-5 rounded-md border-2  text-gray-100 font-semibold uppercase hover:bg-cyan hover:border-0 hover:text-white font-nunito ">Explore</button>
                </div>
              </div>
            </div>
            {/* :HERO ILLUSTRATION */}
            <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
              <img src="https://cdn.dribbble.com/users/2069260/screenshots/5051779/cryptocurrency_illustrations_by_superrgb.gif" alt="hero-home-crypto-illustration" />
            </div>
          </div>
    
          {/* :FEATURES */}
          <div className="container mt-24 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 gap-y-7 text-xs md:text-sm font-nunito">
    
            {/* ::Auto-Magic Layouts */}
            <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
              <img src={realtime} alt="real-time-img" className=' mb-1 h-12'/>
              <span className="text-center">Real-Time Data</span>
            </div>
    
            {/* ::Four Sizes */}
            <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
              <img src={filtering} alt="real-time-img" className='mb-1 h-12'/>
              <span className="text-center">Advanced filters</span>
            </div>
    
            {/* ::Quality Materials */}
            <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
              <img src={watchlist} alt="real-time-img" className=' mt-2 mb-2 h-9'/>
              <span className="text-center">Watchlist</span>
            </div>
    
            {/* ::Fast Shipping */}
            <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <img src={historical} alt="real-time-img" className=' mb-0.5 h-12'/>
              <span className="text-center">Historical Data</span>
            </div>
    
            {/* ::Layflat Page */}
            <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
              <img src={trending} alt="real-time-img" className=' mb-0.5 h-12'/>
              <span className="text-center">trending coins</span>
            </div>
    
          </div>
    
        </div>
      )

}

export default HomeHero
