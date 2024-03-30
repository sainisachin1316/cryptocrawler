import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Cryptoprovider } from '../context/CryptoContext'
import { Trendingprovider } from '../context/TrendingContext'
import { Storageprovider } from '../context/StorageContext'

const Home = () => {
  return (

    <Cryptoprovider>
      <Trendingprovider>
        <Storageprovider>
          

            <main >
              
              
        
              <Navbar/>
        
              
        
              <Outlet/>
            </main>

            
            <div className=' text-center my-5'>

              <div>
                <span >Data provided by{" "}
                  <a className="text-cyan" href="http://www.coingecko.com" rel="noreferrer" target={"_blank"}>
                      CoinGecko
                  </a>
                </span>
              </div>

              <div>© 2024 CryptoCrawler. All rights reserved.</div>
              <div className=' mt-4'>Crafted with ❤️ by <span className=' text-cyan cursor-pointer'>Sachin Saini</span></div>
              
            </div>
            
          
        </Storageprovider>
      </Trendingprovider>
    </Cryptoprovider>


    
  )
}

export default Home
