import React, {useContext, useRef} from 'react'
import submitIcon from "../assets/submit-icon.svg"
import { Cryptocontext } from '../context/CryptoContext'

const Currency = () => {

  let {setCurrency, currency}=useContext(Cryptocontext);
  const currencyRef = useRef(null);
  const allowedCurrency=["inr","usd", "eur","cad", "btc","eth","ltc","bch","bnb","eos","xrp","xlm","link","dot","yfi","aed","ars","aud","bdt","bhd","bmd","brl","chf","clp","cny","czk","dkk","gbp","gel","hkd","huf","idr","ils","jpy","krw","kwd","lkr","mmk","mxn","myr","ngn","nok","nzd","php","pkr","pln","rub","sar","sek","sgd","thb","try","twd","uah","vef","vnd","zar","xdr","xag","xau","bits","sats"];

  const handleCurrencySubmit= (e)=>{
    e.preventDefault();
    let val=currencyRef.current.value.toLowerCase();
    setCurrency(val);
    currencyRef.current.value="";
  }
  return (
    <div className='flex mr-7 mt-4 lg:mt-0  '>
      <form onSubmit={handleCurrencySubmit} className='relative flex items-center font-nunito md:mr-12 mr-1'>
        <label htmlFor="currency" className='relative flex justify-center items-center mr-2 font-bold'>Currency:</label>
        <input list='browsers' ref={currencyRef} placeholder={currency} className='w-16 lg:h-12 h-8  rounded placeholder:text-gray-100 required outline-0 border border-transparent leading-4 placeholder:uppercase sm:text-base text-sm sm:p-0 sm:pl-2 pl-1' type="text" name='currency'/>
        <datalist id="browsers">
        {allowedCurrency.map((item) =>
          <option key={item} value={item.toUpperCase()} />
        )}
        </datalist>
        <button className='ml-1 cursor-pointer' type='submit'><img className=' w-8' src={submitIcon} alt="submit-icon" /></button>
      </form>
    </div>
  )
}

export default Currency
