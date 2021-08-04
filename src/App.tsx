import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Main from './components/main/Main';
import Header from './components/header/Header';
import { useAppDispatch } from './hooks/hooks';
import { addCountries } from './store/countriesSlice';
import { lightTheme, darkTheme } from './theme';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const [currentTheme, setCurrentTheme] = useState('light');
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
  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  };
  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <Wrapper>
        <Header toggleTheme={toggleTheme} />
        <Main />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
