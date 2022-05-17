import React, {useEffect, useState} from 'react';

//API
import { getData } from '../services/api';

const Landing = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setState(await getData())
    }

    fetchAPI();
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default Landing;