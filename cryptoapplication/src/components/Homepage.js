import React from 'react';
import CoinItem from './CoinItem';
import './Coins.css'

export default function Homepage(props) {
  return (
    <div className='containers-fluid'>
        <div>
            <div className='heading'>
                <p>Rank</p>
                <p className='coin-name'>Coin</p>
                
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                    <CoinItem coins={coins} key={coins.id}/>
                )
            })}

        </div>
    </div>
)
}