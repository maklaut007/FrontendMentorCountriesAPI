import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './Country.styled';
import numberWithComas from '../../utilities/numberWithComas';

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
    axios.get(`https://restcountries.com/v3.1/alpha?codes=${countries.join(',')}`)
      .then((response) => {
        const borders: string[] = response.data.map((country: any) => country.name.common);
        setBorderCountries(borders);
      })
      .catch((error) => {
        throw error;
      });
  };
  useEffect(() => {
    const currentPath = location.pathname.replace('/country', '');
    axios.get(`https://restcountries.com/v3.1/name${currentPath}?fullText=true`)
      .then(({ data }) => {
        setCountryData({
          flag: data[0].flags.png,
          name: data[0].name.common,
          nativeName: Object.keys(data[0].name.nativeName)
            .map((name: any) => data[0].name.nativeName[name])[0].common,
          population: data[0].population,
          region: data[0].region,
          subRegion: data[0].subregion,
          capital: data[0].capital[0],
          topLevelDomain: data[0].tld,
          currencies: Object.keys(data[0].currencies)
            .map((cur: any) => data[0].currencies[cur].name),
          languages: Object.keys(data[0].languages)
            .map((lang: any) => data[0].languages[lang]),
          borderCountries: data[0].borders,
        });
      })
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
    <Styled.BorderCountry key={country} to={`/country/${country.toLocaleLowerCase()}`}>
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
          <Styled.MainInfoWrap>
            <Styled.MainInfo>
              <Styled.InfoData>
                <Styled.InfoTitle>Native Name: </Styled.InfoTitle>
                {countryData.nativeName}
              </Styled.InfoData>
              <Styled.InfoData>
                <Styled.InfoTitle>Population: </Styled.InfoTitle>
                {numberWithComas(countryData.population)}
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
                {countryData.topLevelDomain?.join(', ')}
              </Styled.InfoData>
              <Styled.InfoData>
                <Styled.InfoTitle>Currencies: </Styled.InfoTitle>
                {countryData.currencies.join(', ')}
              </Styled.InfoData>
              <Styled.InfoData>
                <Styled.InfoTitle>Languages: </Styled.InfoTitle>
                {countryData.languages.join(', ')}
              </Styled.InfoData>
            </Styled.MainInfo>
          </Styled.MainInfoWrap>
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
