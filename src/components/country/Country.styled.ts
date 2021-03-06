import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;
export const TopMenu = styled.section`
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const LinkBack = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.headerBackground};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  text-decoration: none;
  height: 32px;
  width: 104px;
  margin: 40px 7.5% 20px;
  border-radius: 6px;
`;
export const ReturnArrow = styled(ArrowLeft)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  height: 18px;
  margin-right: 8px;
  fill: ${({ theme }) => theme.text};
`;
export const CountryInfo = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media only screen and (min-width: 1020px) {
    margin-top: 50px;
  }
`;
export const CountryInfoText = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-left: 26px;
  @media only screen and (min-width: 1020px) {
    width: 50%;
  }
`;

export const Flag = styled.img`
  min-width: 320px;
  width: 85%;
  max-width: 560px;
  margin: 50px auto;
  @media only screen and (max-width: 350px) {
    min-width: 250px;
  }
  @media only screen and (min-width: 1020px) {
    margin: auto;
    margin-left: 7.5vw;
    width: 40%;
  }
`;
export const CountryName = styled.h1`
  display: flex;
  width: 100%;
  margin: 0;
  font-size: 1.4rem;
`;
export const MainInfoWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  margin: 16px 0;
`;
export const InfoData = styled.p`
  margin: 8px 0px;
  font-size: 0.9rem;
`;
export const InfoTitle = styled.span`
  font-weight: 600;
`;
export const Borders = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 30px 0 20px;
  @media only screen and (min-width: 1020px) {
    width: 80%;
  }
`;
export const BordersTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  
  width: calc(100% - 10px);
  margin: 10px 10px 10px 0;
  @media only screen and (min-width: 1020px) {
    width: auto;
  }
`;
export const BorderCountry = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.headerBackground};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  padding: 5px;
  margin: 8px 5px 8px 0px;
  min-width: 86px;
  font-size: 0.8rem;
  border-radius: 2px;
`;
