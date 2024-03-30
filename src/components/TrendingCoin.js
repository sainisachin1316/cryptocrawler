import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div onClick={() => getCoinDetails(data.id)} className="lg:w-[40%] sm:w-[60%] w-[80%] border mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-30 ">

      {data ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="font-bold ">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="font-bold">{data.market_cap_rank}</span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="font-bold">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize">score:&nbsp;</span>
            <span className="font-bold">{data.score + 1}</span>
          </h3>

          <img
            src={data.large}
            alt={data.name}
            className=" absolute lg:w-[35%] w-[5rem] h-auto rounded-full lg:top-2/4 top-4 lg:-right-12 -right-6 -translate-y-2/4"/>
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full
             border-b-gray-200 animate-spin 
             "
            role="status"
          />
          <span className="ml-2">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;