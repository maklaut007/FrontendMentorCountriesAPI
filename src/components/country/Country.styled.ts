import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
`;
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.headerBackground};
  box-shadow: 0 0 8px ${({ theme }) => theme.shadow};
  text-decoration: none;
  height: 32px;
  width: 104px;
  margin: 40px 30px 20px;
`;
export const CountryInfo = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 30px;
`;
export const Flag = styled.img`
  width: 320px;
  height: 230px;
  margin: auto;
  margin: 40px 0;
`;
export const CountryName = styled.h1`
  width: 100%;
  margin: 0;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`;
export const InfoData = styled.p`
  margin: 8px;
`;
export const InfoTitle = styled.span`
  font-weight: 600;
`;
export const Borders = styled.span`
`;
