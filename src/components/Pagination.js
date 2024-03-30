import React, { useContext, useRef } from 'react'
import paginationArrow from '../assets/pagination-arrow.svg'
import { Cryptocontext } from '../context/CryptoContext';
import submitIcon from '../assets/submit-icon.svg'

const PerPage = ()=>{

    const inputRef = useRef(null);
    const {setPerPage} = useContext(Cryptocontext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        let val=inputRef.current.value;

        if(val>=0 && val<=250)
        {
            setPerPage(val);
            inputRef.current.value=val;
        }
    }

    return(
        <form onSubmit={handleSubmit} className='relative flex font-nunito mr-0  md:mr-12 md:mt-0 mt-4'>
            <label htmlFor='perpage' className='relative flex justify-center items-center mr-2 font-bold'>Per page:</label>
            <input ref={inputRef} placeholder="10" className='w-16 h-8 rounded placeholder:text-gray-100 pl-2 required outline-0 border border-transparent leading-4' type="number" name='currency' min={1} max={250}/>
            <button className='ml-1 cursor-pointer' type='submit'><img className='w-8 ' src={submitIcon}  alt="submit-icon" /></button>
        </form>

    )
}
    

const Pagination = () => {

    
    let {page, setPage, totalPages, perPage, coinSearch}=useContext(Cryptocontext);
    const totalNumber=Math.ceil(totalPages/perPage);

    const next = ()=>{
        if(page===totalNumber)
        {
            return null;
        }
        else{
            setPage(page+1);
        }
    }

    const prev = ()=>{
        if(page===1)
        {
            return null;
        }
        else{
            setPage(page-1);
        }
    }

    const multiStepNext=()=>{
        if(page+3>=totalNumber)
            setPage(totalNumber-1);
        else   
            setPage(page+3);
    }

    const multiStepPrev=()=>{
        if(page-3<=1)
            setPage(totalNumber+1);
        else   
            setPage(page-2);
    }

  if(!coinSearch)
  {
    return (
        <>
        <PerPage/>
        <div className='flex items-center md:mt-0 mt-4'>
          <ul className="flex items-center justify-end text-sm">
    
            <li className="flex items-center">
                <button className="outline-0 w-8" onClick={prev}>
                  <img
                    className="w-full h-auto rotate-180"
                    src={paginationArrow}
                    alt="left"
                  />
                </button>
            </li>
    
            {
                page + 1 === totalNumber || page === totalNumber
                    ? (<li><button onClick={multiStepPrev} className="ouline-0 hover:text-gray-200 text-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-lg">...</button></li>)
                    : null
            }
    
            {
                page - 1 !== 0
                    ? (<li><button onClick={prev} className="ouline-0  hover:text-white rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5">{page-1}</button></li>)
                    : null
            }
            
            <li><button disabled className=" rounded-full w-8 h-8 flex items-center justify-center bg-gray-200  text-white mx-1.5">{page}</button></li>
    
    
            {
                page + 1 !== totalNumber && page !== totalNumber
                    ? (<li><button onClick={next} className="ouline-0 hover:text-white  rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5">{page+1}</button></li>)
                    : null
            }
    
            {
                page+1 !==totalNumber && page !==totalNumber
                    ? ( <li><button onClick={multiStepNext} className="ouline-0 hover:text-gray-300 text-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-lg    ">...</button></li>)
                    : null
            }
           
            {
                page!==totalNumber 
                    ? (<li><button onClick={()=> setPage(totalNumber)} className="ouline-0 hover:text-white  rounded-full w-8 h-8 flex items-center justify-center bg-gray-100 mx-1.5">{totalNumber}</button></li>)
                    : null
            }
    
            <li>
                <button className="outline-0 hover:fill-gray-300 w-8" onClick={next}>
                  <img
                    className="w-full h-auto"
                    src={paginationArrow}
                    alt="right"
                  />
                </button>
              </li>
          </ul>
        </div>
    
        
        </>
      )
  }
  else
    {return null;}
}

export default Pagination
