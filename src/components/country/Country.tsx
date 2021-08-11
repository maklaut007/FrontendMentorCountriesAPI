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
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  const fetchBorderCountries = (countries: string[]) => {
    axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${countries.join(';')}`)
      .then((response) => {
        const borders: string[] = response.data.map((country: any) => country.name);
        setBorderCountries(borders);
      })
      .catch((error) => {
        throw error;
      });
  };
  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name${location.pathname}?fullText=true`)
      .then(({ data }) => (
        setCountryData({
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
        })
      ))
      .catch((error) => {
        throw error;
      });
  }, [location]);

  useEffect(() => {
    if (countryData.borderCountries[0]) {
      fetchBorderCountries(countryData.borderCountries);
    }
  }, [countryData.borderCountries]);
  const mapBorderCountries = () => borderCountries.map((country) => (
    <Styled.BorderCountry key={country} to={`/${country.toLocaleLowerCase()}`}>
      { country }
    </Styled.BorderCountry>
  ));
  return (
    <Styled.Wrapper>
      <Styled.TopMenu>
        <Styled.LinkBack to="/main">
          <Styled.ReturnArrow />
          Back
        </Styled.LinkBack>
      </Styled.TopMenu>
      <Styled.CountryInfo>
        <Styled.Flag alt={`${countryData.name}flag`} src={countryData.flag} />
        <Styled.CountryInfoText>
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
            <Styled.BordersTitle>Border Countries:</Styled.BordersTitle>
            <br />
            {mapBorderCountries()}
          </Styled.Borders>
        </Styled.CountryInfoText>
      </Styled.CountryInfo>
    </Styled.Wrapper>
  );
}
export default Coutry;
