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

  const fetchBorderCountries = (country: CountyDataType) => {
    if (country.borderCountries[0]) {
      axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${country.borderCountries.join(';')}`)
        .then((response) => {
          setCountryData({
            flag: country.flag,
            name: country.name,
            nativeName: country.nativeName,
            population: country.population,
            region: country.region,
            subRegion: country.subRegion,
            capital: country.capital,
            topLevelDomain: country.topLevelDomain,
            currencies: country.currencies,
            languages: country.languages,
            borderCountries: response.data.map((ctr: any) => ctr.name),
          });
        })
        .catch((error) => {
          throw error;
        });
    } else {
      console.log(3);
    }
    return 0;
  };
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name${location.pathname}?fullText=true`)
      .then(({ data }) => ({
        flag: data[0].flag,
        name: data[0].name,
        nativeName: data[0].nativeName,
        population: data[0].population,
        region: data[0].region,
        subRegion: data[0].subregion,
        capital: data[0].capital,
        topLevelDomain: data[0].topLevelDomain,
        currencies: data[0].currencies.map((cur: any) => cur.name),
        languages: data[0].languages.map((lang: any) => lang.name),
        borderCountries: data[0].borders,
      })).then((data: CountyDataType) => {
        fetchBorderCountries(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  // useEffect(() => {
  //   console.log(2, countryData.borderCountries);
  //   fetchBorderCountries(countryData?.borderCountries);
  // }, [countryData]);
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
