import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
  } from "recharts";

  import { useContext } from "react";
  import { Cryptocontext } from "./../context/CryptoContext";


  function CustomTooltip({ payload, label, active, currency }) {
    if (active && payload && payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label text-sm text-gray-300">{`${label} : ${new Intl.NumberFormat(
            "en-IN",
            {
              style: "currency",
              currency: currency,
              minimumFractionDigits: 5,
            }
          ).format(payload[0].value)}`}</p>
        </div>
      );
    }
  
    return null;
  }

const ChartComponent = ({ data, currency, type }) => {
    return (
        <ResponsiveContainer width={'99%'} height={300}>
        <LineChart width={400} height={400} data={data}>
            <Line
            type="monotone"
            dataKey={type}
            stroke="#3a80e9"
            strokeWidth={"1px"}
            dot={false}
            />
            <CartesianGrid stroke="#808080" />
            <XAxis dataKey="date" />
            <YAxis dataKey={type} hide domain={["auto", "auto"]} />
            <Tooltip
            content={<CustomTooltip />}
            currency={currency}
            cursor={false}
            wrapperStyle={{ outline: "none" }}
            />
            <Legend />
        </LineChart>
        </ResponsiveContainer>
    );
};


const Chart = ({id}) => {

    const [chartData, setChartData] = useState();
    let { currency } = useContext(Cryptocontext);
    const [type, setType] = useState("prices");
    const [days, setDays] = useState(30);

    useEffect(() => {
        const getChartData= async(id)=>{
            try {
                const data= await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily&x_cg_demo_api_key=${process.env.REACT_APP_COINGECKO_API}`)  
    
                .then(res=>res.json()).then(json=>json);
    
                console.log("chart-data", data);

                let convertedData = data[type].map((item) => {
                return {
                    date: new Date(item[0]).toLocaleDateString(),
                    [type]: item[1],
                };
                });

                console.log(convertedData);
                setChartData(convertedData);
                
            } catch (error) {
                console.log(error);
            }
        }

        getChartData(id);

        // eslint-disable-next-line
    }, [id,type,days, currency])
    
  return (
    <div className="w-full h-[60%]">
      <ChartComponent data={chartData} currency={currency} type={type} />
      <div >
        <div className="flex flex-wrap justify-center gap-4">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "prices"
              ? "bg-gray-300 text-white"
              : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setType("prices")}
        >
          Price
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "market_caps"
              ? "bg-gray-300 text-white"
              : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setType("market_caps")}
        >
          market caps
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            type === "total_volumes"
              ? "bg-gray-300 text-white"
              : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setType("total_volumes")}
        >
          total volumes
        </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-5">
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 1 ? "bg-gray-300 text-white"
            : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setDays(1)}
        >
          1d
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 7 ? "bg-gray-300 text-white"
            : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setDays(7)}
        >
          7d
        </button>
        
        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 14 ? "bg-gray-300 text-white"
            : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setDays(14)}
        >
          14d
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 30 ? "bg-gray-300 text-white"
            : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setDays(30)}
        >
          30d
        </button>

        <button
          className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${
            days === 365 ? "bg-gray-300 text-white"
            : "bg-gray-100 text-gray-300"
          }`}
          onClick={() => setDays(365)}
        >
          1year
        </button>
        </div>

        
      </div>
    </div>
  )
}

export default Chart
