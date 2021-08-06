import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectCountries } from '../../store/countriesSlice';
import * as Styled from './Main.styled';

interface CountyType {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
}

function Main(): JSX.Element {
  const countries = useAppSelector(selectCountries);
  const [displayedCountries, setDisplayedCountries] = useState<CountyType[]>([]);

  const regions: Array<string> = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [region, setRegion] = useState('');

  const [filterDisplayed, setFilterDisplayed] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const filterCountries = () => {
    const results = countries.filter(
      (country) => country.name.toLowerCase().includes(searchValue.toLowerCase())
      && (country.region === region || !region),
    );
    setDisplayedCountries(results);
  };
  useEffect(() => {
    filterCountries();
  }, [region]);

  useEffect(() => {
    setDisplayedCountries(countries);
  }, [countries]);

  useEffect(() => {
    filterCountries();
  }, [searchValue]);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Styled.Wrapper>
      <Styled.SearchCountry type="text" value={searchValue} onChange={handleSearchInput} placeholder="Search for a country" />
      <Styled.FilterDropDown>
        <Styled.DropDownHead onClick={() => { setFilterDisplayed(!filterDisplayed); }}>
          Filter by Region
          <Styled.DropDownArrow filterDisplayed={filterDisplayed}>˄</Styled.DropDownArrow>
        </Styled.DropDownHead>
        <Styled.Regions filterDisplayed={filterDisplayed}>
          {regions?.map((reg) => (
            <Styled.Region onClick={() => setRegion(reg)} key={reg}>{reg}</Styled.Region>
          ))}
        </Styled.Regions>
      </Styled.FilterDropDown>
      <section>
        {displayedCountries?.map((country) => (
          <Styled.Country key={country.name}>
            <Styled.StyledLink to={`/${country.name.toLocaleLowerCase()}`}>
              <Styled.CountryFlag src={country.flag} />
              <Styled.CountryName>{country.name}</Styled.CountryName>
              <Styled.CountryData>
                <Styled.CountryDataType>Population: </Styled.CountryDataType>
                {/* Add comas in number */}
                {country.population}
              </Styled.CountryData>
              <Styled.CountryData>
                <Styled.CountryDataType>Region: </Styled.CountryDataType>
                {country.region}
              </Styled.CountryData>
              <Styled.CountryData>
                <Styled.CountryDataType>Capital: </Styled.CountryDataType>
                {country.capital}
              </Styled.CountryData>
            </Styled.StyledLink>
          </Styled.Country>
        ))}
      </section>
    </Styled.Wrapper>
  );
}

export default Main;
