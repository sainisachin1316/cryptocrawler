import React, { useContext, useEffect } from 'react'
import { Cryptocontext } from '../context/CryptoContext'

const Sorting = () => {

  let {sortBy, setSortBy}=useContext(Cryptocontext);

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  useEffect(() => {
    
  
  }, [sortBy])
  
  return (
    
      <label className="relative flex lg:justify-center justify-start items-center mt-4 lg:mt-0">
          <span className="font-bold w-20">Sort by: </span>
          <select name="sortby" className="rounded sm:text-base text-sm pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0 w-full lg:w-48 h-8" onChange={handleSort} >
            <option value="market_cap_desc">market cap desc</option>
            <option value="market_cap_asc">market cap asc</option>
            <option value="volume_desc">volume desc</option>
            <option value="volume_asc">volume asc</option>
            <option value="id_desc">id desc</option>
            <option value="id_asc">id asc</option>
          </select>
          
        </label>
    
  )
}

export default Sorting
