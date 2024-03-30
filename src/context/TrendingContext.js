import { createContext, useEffect, useState } from "react";




export const Trendingcontext =createContext({});


export const Trendingprovider =({children})=>{
    

    const [trendData, setTrendData] = useState();

    const getTrendData= async ()=>{

        try {
            const data= await fetch(`https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)

            .then(res=>res.json()).then(json=>json);

            setTrendData(data.coins);
            
        } catch (error) {
            console.log(error);
        }
    }

 

    const resetTrendingResult= ()=>{
        getTrendData();
    }


    useEffect(() => {
      getTrendData();
        // eslint-disable-next-line
    }, [])
    
    
    return(
        <Trendingcontext.Provider value={{ trendData, resetTrendingResult }}>
            {children}
        </Trendingcontext.Provider>
    )
}
