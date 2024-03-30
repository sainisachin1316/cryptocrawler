import React, {useContext, useState} from 'react'
import searchIcon from "../assets/search-icon.svg"
import { Cryptocontext } from '../context/CryptoContext';
import debounce from 'lodash.debounce';


const SearchInput = ({handleSearch})=>{
  const [searchText, setSearchText] = useState("");
  let {searchData,setSearchData, setCoinSearch}=useContext(Cryptocontext);


  let handleInput= (e)=>{
    e.preventDefault();
    let query=e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const selectCoin =(coin)=>{
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    handleSearch(searchText);
  }

  return(
    <>
      <form className='xl:w-96 lg:w-60 w-full relative flex items-center lg:ml-7 font-nunito' action="" onSubmit={handleSubmit}>
        <button  className='absolute right-1 cursor-pointer' type='submit' ><img src={searchIcon} className='w-full h-auto' alt="search"/></button>
        <input value={searchText} className='w-full rounded h-12  placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:no-underline' onChange={handleInput} placeholder='Search your Crypto...' type="text" name="search" />
      </form>

      {
        searchText.length>0 ?

        <ul className='absolute right-0 xl:w-96 lg:w-60 w-full xl:h-96 lg:h-80 h-80 z-10 rounded-lg overflow-x-hidden bg-gray-100 bg-opacity-30 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
          {
            searchData ? 
            
            searchData.map(coin => {
              return <li className='flex items-center ml-4 my-2 cursor-pointer' key={coin.id} onClick={()=> selectCoin(coin.id)}>
                <img src={coin.thumb} alt={coin.name} className='w-[1.2rem] ml-3 mr-1' />
                <span>{coin.name}</span>
              </li>
            })

            : <div className='w-full h-full flex justify-center items-center'>
                <div className='w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin' role='status'/>
                <span className='ml-2'>Searching...</span>
            </div>
          }
        </ul> 


        : null
      }

    </>
  )
}

const Search = () => {

  
  let {getSearchResults}=useContext(Cryptocontext);

  const debounceFunc=debounce(function(val){
    getSearchResults(val);
  }, 2000)
  
  


  return (
    <div className='relative'>
      <SearchInput handleSearch={debounceFunc}/>
    </div>
  )
}

export default Search
