import { createContext, useEffect, useState } from "react";




export const Cryptocontext =createContext({});


export const Cryptoprovider =({children})=>{
    

    const [cryptoData, setCryptoData] = useState();
    const [searchData, setSearchData] = useState();
    const [coinSearch, setCoinSearch] = useState("");
    const [currency, setCurrency] = useState("inr");
    const [sortBy, setSortBy] = useState("market_cap_desc");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(250)
    const [perPage, setPerPage] = useState(10)
    const [coinData, setCoinData] = useState()
    

    const getCryptoData= async ()=>{
        setCryptoData();

        try {
            const data= await fetch(`https://api.coingecko.com/api/v3/coins/list?x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)  

            .then(res=>res.json()).then(json=>json);
            
            setTotalPages(data.length);

        } catch (error) {
            console.log(error);
        }


        try {
            const data= await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en&x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)  

            .then(res=>res.json()).then(json=>json);

            
            setCryptoData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const getSearchResults= async (query)=>{
        try {
            const data= await fetch(`https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)  

            .then(res=>res.json()).then(json=>json);

            
            setSearchData(data.coins);
        } catch (error) {
            console.log(error);
        }
    }

    const resetFunction= ()=>{
        setPage(1);
        setCoinSearch("");
        setPerPage(10);
        setSortBy("market_cap_desc");
        setCurrency("inr");
    }


    const getCoinData= async (coinid)=>{
        setCoinData();

        try {
            const data= await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false&x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)

            .then(res=>res.json()).then(json=>json);

            
            setCoinData(data);
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(() => {
      getCryptoData();
        // eslint-disable-next-line
    }, [coinSearch, currency, sortBy, page, perPage])
    
    
    return(
        <Cryptocontext.Provider value={{ cryptoData, searchData, setSearchData, getSearchResults, setCoinSearch, currency, setCurrency, setSortBy,sortBy, setPage, page, totalPages, resetFunction, setPerPage, perPage, coinSearch, getCoinData, coinData}}>
            {children}
        </Cryptocontext.Provider>
    )
}
