import React, { useEffect } from 'react';
import axios from 'axios';
import Main from './components/main/Main';
import Header from './components/header/Header';
import { useAppDispatch } from './hooks/hooks';
import { addCountries } from './store/countriesSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        const countriesData = response.data.map((
          country: { name: string;
            flag: string;
            capital: string;
            region: string;
            population: number; },
        ) => ({
          name: country.name,
          flag: country.flag,
          capital: country.capital,
          region: country.region,
          population: country.population,
        }));
        dispatch(addCountries(countriesData));
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
