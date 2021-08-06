import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.backgound};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;
export const Country = styled.article`
  width: 265px;
  height: 335px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px ${({ theme }) => theme.shadow};
  overflow: hidden;
  margin: 40px auto;
  background-color: ${({ theme }) => theme.headerBackground};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  position: relative;
  height: 100%;
  width: 100%;
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
  margin-left: 24px;
  font-size: 0.95rem;
`;
export const CountryDataType = styled.span`
  font-weight: 600;
`;
export const FilterDropDown = styled.div`
  width: 200px;
  height: 50px;
  position: relative;
  margin: 20px auto 20px 20px;
  background-color: ${({ theme }) => theme.headerBackground};
  font-size: 0.8rem;
`;
export const Regions = styled.div<{filterDisplayed: boolean}>`
  background-color: ${({ theme }) => theme.headerBackground};
  position: absolute;
  width: calc(100% - 40px);
  top: 60px;
  padding: 20px;
  box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
  display: ${(props) => (props.filterDisplayed ? 'block' : 'none')};
`;
export const Region = styled.div`
  margin: 8px;
`;
export const SearchCountry = styled.input`
  border: none;
  position: relative;
  background-color: ${({ theme }) => theme.headerBackground};
  box-shadow: 0px 1px 7px ${({ theme }) => theme.shadow};
  max-width: 95%;
  margin: 20px auto;
  width: 240px;
  padding: 15px 30px 15px 70px;
  border-radius: 4px;
  &:focus{
    outline: none;
  }
  &::after{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    top: 0;
    left: 0;
  }
`;
export const DropDownHead = styled.p`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  margin: 0px;
  justify-content: space-between;
  box-shadow: 0 0 10px ${({ theme }) => theme.shadow};
  cursor: pointer;
`;
export const DropDownArrow = styled.span<{filterDisplayed: boolean}>`
  transform: ${(props) => (props.filterDisplayed ? 'rotate(0deg)' : 'rotate(180deg)')};
`;
