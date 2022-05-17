import React, {useEffect, useState} from 'react';

//API
import { getData } from '../services/api';

//components
import Loader from './Loader';
import Coin from './Coin';

//styles
import styles from "./Landing.module.css";

const Landing = () => {
  const [state, setState] = useState([]);
  const [search , setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setState(await getData())
    }
    fetchAPI();
  }, []);
  
  const searchHandeler = event => {
    setSearch(event.target.value)
  };

  const searchedCoins = state.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input className={styles.input} type='text' placeholder='Search' value={search} onChange={searchHandeler} />
      {state.length ?
        <div className={styles.coinContainer} >
          {searchedCoins.map(coin => <Coin 
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChange={coin.price_change_percentage_24h}
          />)}
        </div> :
        <Loader />
      }
    </>
  );
};

export default Landing;