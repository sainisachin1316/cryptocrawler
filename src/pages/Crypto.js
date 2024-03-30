import React from 'react'
import TabelComponent from '../components/TabelComponent'
import Filters from '../components/Filters'
import { Outlet } from 'react-router-dom'

const Crypto = () => {
  return (
    <section className='w-[80%] h-full flex flex-col mx-auto mt-16 mb-24 relative'>
      <div className='md:py-10 md:text-lg mb-24 text-md text-center text-gray-100 font-nunito '>
      Unlock the Power of Cryptocurrency Exploration: Seamlessly Search, Analyze, and Engage with the Digital Assets That Matter to You.
      <hr className='mt-8 border-gray-100' />
      </div>
      <Filters/>
      <TabelComponent/>

      <Outlet/>
    </section>
  )
}

export default Crypto
