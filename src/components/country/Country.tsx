import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './Country.styled';

interface CountyDataType {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
}

function Coutry(): JSX.Element {
  const location = useLocation();
  const [countryData, setCountryData] = useState<CountyDataType>({
    flag: '',
    name: '',
    nativeName: '',
    population: 0,
    region: '',
    subRegion: '',
    capital: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borderCountries: [],
  });
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name${location.pathname}?fullText=true`)
      .then((response) => {
        setCountryData({
          flag: response.data[0].flag,
          name: response.data[0].name,
          nativeName: response.data[0].nativeName,
          population: response.data[0].population,
          region: response.data[0].region,
          subRegion: response.data[0].subregion,
          capital: response.data[0].capital,
          topLevelDomain: response.data[0].topLevelDomain,
          currencies: response.data[0].currencies.map((cur: any) => cur.name),
          languages: response.data[0].languages.map((lang: any) => lang.name),
          borderCountries: response.data[0].borders,
        });
      })
      .catch((error) => {
        throw error;
      });
  }, []);
  return (
    <Styled.Wrapper>
      <Styled.StyledLink to="/main">Back</Styled.StyledLink>
      <Styled.CountryInfo>
        <Styled.Flag alt={`${countryData.name}flag`} src={countryData.flag} />
        <Styled.CountryName>{countryData.name}</Styled.CountryName>
        <Styled.MainInfo>
          <Styled.InfoData>
            <Styled.InfoTitle>Native Name: </Styled.InfoTitle>
            {countryData.nativeName}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Population: </Styled.InfoTitle>
            {countryData.population}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Religion: </Styled.InfoTitle>
            {countryData.region}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Sub Region: </Styled.InfoTitle>
            {countryData.subRegion}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Capital: </Styled.InfoTitle>
            {countryData.capital}
          </Styled.InfoData>
        </Styled.MainInfo>
        <Styled.MainInfo>
          <Styled.InfoData>
            <Styled.InfoTitle>Top level Domain: </Styled.InfoTitle>
            {countryData.topLevelDomain}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Currencies: </Styled.InfoTitle>
            {countryData.currencies}
          </Styled.InfoData>
          <Styled.InfoData>
            <Styled.InfoTitle>Languages: </Styled.InfoTitle>
            {countryData.languages}
          </Styled.InfoData>
        </Styled.MainInfo>
        <Styled.Borders>
          Border Countries:
          {countryData.borderCountries}
        </Styled.Borders>
      </Styled.CountryInfo>
    </Styled.Wrapper>
  );
}
export default Coutry;
