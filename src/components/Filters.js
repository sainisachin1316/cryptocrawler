import React from 'react'
import Search from './Search'
import Currency from './Currency'
import Sorting from './Sorting'
import Reset from './Reset'



const Filters = () => {

  
  return (
    <div className='w-full lg:h-14 rounded-lg flex lg:flex-row flex-col lg:items-center lg:justify-around relative'>
        <Search/>
        <Currency/>
        <Sorting/>
        <Reset/>
    </div>
  )
}

export default Filters
