import { createContext, useContext, useEffect, useState } from "react";
import { Cryptocontext } from "./CryptoContext";




export const Storagecontext =createContext({});


export const Storageprovider =({children})=>{

    const [allCoins, setAllCoins] = useState([]);
    const [savedData, setSavedData] = useState();
    
    let {currency, sortBy}=useContext(Cryptocontext);

    const saveCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"));
    
        if (oldCoins.includes(coinId)) {
          return null;
        } else {
          let newCoin = [...oldCoins, coinId];
          setAllCoins(newCoin);
          localStorage.setItem("coins", JSON.stringify(newCoin));
        }
      };
    
      const removeCoin = (coinId) => {
        let oldCoins = JSON.parse(localStorage.getItem("coins"));
    
        let newCoin = oldCoins.filter((coin) => coin !== coinId);
    
        setAllCoins(newCoin);
        localStorage.setItem("coins", JSON.stringify(newCoin));
      };

      const getSavedData = async (totalCoins = allCoins) => {
        try {
          const data = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(
              ","
            )}&order=${sortBy}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`
          )
            .then((res) => res.json())
            .then((json) => json);
    
          // console.log(data);
          setSavedData(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      const resetSavedResult = () => {
        getSavedData();
      };

      useEffect(() => {
        if (allCoins.length > 0) {
          getSavedData(allCoins);
        } else {
          setSavedData();
        }
        // eslint-disable-next-line
      }, [allCoins]);
    

    useEffect(() => {
        let isThere = JSON.parse(localStorage.getItem("coins")) || false;

        if (!isThere) {
            
            localStorage.setItem("coins", JSON.stringify([]));
          } else {
            
            let totalCoins = JSON.parse(localStorage.getItem("coins"));
            setAllCoins(totalCoins);
      
            if (totalCoins.length > 0) {
              getSavedData(totalCoins);
            }
          }
        // eslint-disable-next-line
    }, [])
    
    
    return(
        <Storagecontext.Provider value={{saveCoin, allCoins, removeCoin, savedData, resetSavedResult,}}>
            {children}
        </Storagecontext.Provider>
    )
}
