import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../images/arrow-down.svg';
import { ReactComponent as SearchImage } from '../../images/search-icon.svg';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.backgound};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;
export const TopMenu = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  @media only screen and (min-width: 600px) {
    margin: 0px 70px;
  }
`;

export const SearchCountryWrap = styled.div`
  position: relative;
  width: 90%;
  max-width: 480px;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.headerBackground};
  border-radius: 4px;
  margin: 24px auto;
  @media only screen and (min-width: 600px) {
    margin: 24px 5%;
  }
`;
export const SearchIcon = styled(SearchImage)`
  width: 10px;
  height: 10px;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translate(0, -50%);
  left: 26px;
  fill: ${({ theme }) => theme.text};
`;
export const SearchCountry = styled.input`
  margin-left: 50px;
  border: none;
  background-color: ${({ theme }) => theme.headerBackground};
  width: calc(100% - 100px);
  height: 30px;
  padding: 15px 30px 15px 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  &:focus{
    outline: none;
  }
  &::placeholder { 
    color: ${({ theme }) => theme.text};
    opacity: 0.6;
  }
`;

// Dropdown

export const FilterDropDown = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
  background-color: ${({ theme }) => theme.headerBackground};
  font-size: 0.8rem;
  z-index: 1;
  border-radius: 4px;
  margin: 20px 5% ;
`;
export const DropDownHead = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  margin: 0px;
  justify-content: space-between;
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  cursor: pointer;
  border-radius: 4px;
`;
export const DropDownArrow = styled(ArrowDown)<{$filterDisplayed: boolean}>`
  width: 8px;
  height: 8px;
  fill: ${({ theme }) => theme.text};
  transform: ${(props) => (props.$filterDisplayed ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
export const Regions = styled.div<{filterDisplayed: boolean}>`
  background-color: ${({ theme }) => theme.headerBackground};
  position: absolute;
  width: calc(100% - 40px);
  top: 70px;
  padding: 20px;
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  display: ${(props) => (props.filterDisplayed ? 'block' : 'none')};
  border-radius: 4px;
`;
export const Region = styled.div`
  margin: 8px;
`;

// Countries

export const CountriesList = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
export const Country = styled.article`
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.shadow};
  overflow: hidden;
  
  background-color: ${({ theme }) => theme.headerBackground};
`;
export const CountryDataType = styled.span`
  font-weight: 600;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  position: relative;
  margin: 30px auto;
  @media only screen and (min-width: 375px) {
    margin: 30px 40px;
  }
`;

export const CountryFlag = styled.img`
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
`;
export const CountryName = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin-left: 24px;
  margin-top: 24px;
`;
export const CountryData = styled.p`
  margin: 5px 0 5px 24px;
  font-size: 0.95rem;
`;
