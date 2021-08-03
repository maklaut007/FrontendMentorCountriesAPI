import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { selectCountries } from '../../store/countriesSlice';

const Wrapper = styled.main`
  background-color: #FAFAFA;
`;
const Country = styled.article`
  background-color: #fff;
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px #eee;
  overflow: hidden;
  margin: 40px auto;
`;
const CountryFlag = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
`;
const CountryName = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 24px;
  margin-top: 24px;
`;
const CountryData = styled.p`
  margin-left: 24px;
  font-size: 0.95rem;
`;
const CountryDataType = styled.span`
  font-weight: 600;
`;
const FilterDropDown = styled.div`
  width: 200px;
  height: 50px;
  position: relative;
  margin: 20px;
  background-color: #fff;
  font-size: 0.8rem;
`;
const Regions = styled.div<{filterDisplayed: boolean}>`
  background-color: #fff;
  position: absolute;
  width: calc(100% - 40px);
  top: 60px;
  padding: 20px;
  box-shadow: 0 0 10px #eee;
  display: ${(props) => (props.filterDisplayed ? 'block' : 'none')};
`;
const Region = styled.div`
  margin: 8px;
`;
const SearchCountry = styled.input`
  width: 340px;
`;
const DropDownHead = styled.p`
  display: flex;
  width: calc(100%-40px);
  height: 100%;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  box-shadow: 0 0 10px #eee;
`;
const DropDownArrow = styled.span<{filterDisplayed: boolean}>`
  transform: ${(props) => (props.filterDisplayed ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
interface CountyType {
  flag: string;
  name: string;
  capital: string;
  region: string;
  population: number;
}
function Main(): JSX.Element {
  const countries = useSelector(selectCountries);
  const [displayedCountries, setDisplayedCountries] = useState<CountyType[]>([]);
  const regions: Array<string> = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [region, setRegion] = useState('');
  const [filterDisplayed, setFilterDisplayed] = useState(false);
  useEffect(() => {
    if (region) {
      const secectedCountries: CountyType[] = countries.filter(
        (country) => country.region === region,
      );
      setDisplayedCountries(secectedCountries);
    }
  }, [region]);
  useEffect(() => {
    setDisplayedCountries(countries);
  }, [countries]);
  return (
    <Wrapper>
      <SearchCountry type="text" placeholder="Search for a country" />
      <FilterDropDown>
        <DropDownHead onClick={() => { setFilterDisplayed(!filterDisplayed); }}>
          Filter by Region
          <DropDownArrow filterDisplayed={filterDisplayed}>˄</DropDownArrow>
        </DropDownHead>
        <Regions filterDisplayed={filterDisplayed}>
          {regions?.map((reg) => (
            <Region onClick={() => setRegion(reg)} key={reg}>{reg}</Region>
          ))}
        </Regions>
      </FilterDropDown>
      <section>
        {displayedCountries?.map((country) => (
          <Country key={country.name}>
            <CountryFlag src={country.flag} />
            <CountryName>{country.name}</CountryName>
            <CountryData>
              <CountryDataType>Population: </CountryDataType>
              {/* Add comas in number */}
              {country.population}
            </CountryData>
            <CountryData>
              <CountryDataType>Region: </CountryDataType>
              {country.region}
            </CountryData>
            <CountryData>
              <CountryDataType>Capital: </CountryDataType>
              {country.capital}
            </CountryData>
          </Country>
        ))}
      </section>
    </Wrapper>
  );
}

export default Main;
