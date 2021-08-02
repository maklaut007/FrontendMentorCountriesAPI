import React from 'react';
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
function Main(): JSX.Element {
  const countries = useSelector(selectCountries);
  const countries1 = useSelector((state) => state);
  return (
    <Wrapper>
      <div>Seach</div>
      <div>Filter</div>
      <section>
        {countries?.map((country) => (
          <Country key={country.name}>
            <CountryFlag src={country.flag} />
            <CountryName>{country.name}</CountryName>
            <CountryData>
              <CountryDataType>Population: </CountryDataType>
              {/* Add come in number */}
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
