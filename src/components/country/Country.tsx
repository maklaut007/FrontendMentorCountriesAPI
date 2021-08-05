import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './Country.styled';

interface CountyDataType {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

function Coutry(): JSX.Element {
  const location = useLocation();
  const [countryData, setCountryData] = useState<CountyDataType>();
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name${location.pathname}?fullText=true`)
      .then((response) => {
        console.log(response.data[0]);
        setCountryData({
          flag: response.data[0].flag,
          name: response.data[0].name,
          nativeName: response.data[0].nativeName,
          population: response.data[0].population,
          region: response.data[0].region,
          capital: response.data[0].capital,
          topLevelDomain: response.data[0].topLevelDomain,
          currencies: response.data[0].currencies.map((cur: any) => cur.name),
          languages: response.data[0].currencies.map((lang: any) => lang.name),
          borderCountries: response.data[0].borders,
        });
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <Styled.Wrapper>
      <Link to="/main">Back</Link>
      {location.pathname}
    </Styled.Wrapper>
  );
}
export default Coutry;
