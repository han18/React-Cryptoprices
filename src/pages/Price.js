import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price(props) {
  // Our api key from coinapi.io.
  const apiKey = "E6F7D100-9CC7-4117-B6D3-24F17959E2CF";
  // Grabbing the currency symbol from the URL Params.
  const params = useParams();
  const symbol = params.symbol;
  // Using the other two variables to create our URL.
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
}
