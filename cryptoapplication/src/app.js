import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import Cryptodetails from "./components/Cryptodetails";
import './styling.css'

const App=()=>{
  const [coins,setCoins]=useState([])

  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  useEffect(() => {
   axios.get(url).then((response)=>{
    setCoins(response.data);
    console.log(response.data[2])
   }).catch((error)=>{
    console.log(error);
   })
  }, [])

    return (
      <div>
        <Navbar />



        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage coins={coins}/>}></Route>
            <Route path="/exchanges" element={<Exchanges />}></Route>
            <Route
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            ></Route>
            <Route path=":coinId" element={<Cryptodetails/>}></Route>
            <Route path="/news" element={<News />}></Route>
          </Routes>
        </BrowserRouter>





        <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="/">
                <i className="icon ion-social-instagram"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="/">
                <i className="icon ion-social-facebook"></i>
              </a>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">Home</a>
              </li>
              <li className="list-inline-item">
                <a href="/exchanges">Exchanges</a>
              </li>
              <li className="list-inline-item">
                <a href="/cryptocurrencies">Cryptocurrencies</a>
              </li>
              <li className="list-inline-item">
                <a href="/news">News</a>
              </li>
            </ul>
            <p className="copyright">CRYPTOVERSE © 2022</p>
          </footer>
        </div>
      </div>
    );
}

export default App;