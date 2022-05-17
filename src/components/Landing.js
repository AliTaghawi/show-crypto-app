import React, {useEffect, useState} from 'react';

//API
import { getData } from '../services/api';

//components
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setState(await getData())
    }

    fetchAPI();
  }, [])

  return (
    <>
      <input type='text' placeholder='Search' />
      {
        state.length ?
          <div>
            {
              state.map(coin => <Coin 
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_cap}
                priceChange={coin.price_change_percentage_24h}
              />)
            }
          </div> :
          <Loader />
      }
    </>
  );
};

export default Landing;