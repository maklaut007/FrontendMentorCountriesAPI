import styled from 'styled-components';
import { ReactComponent as MoonImage } from '../../images/moon.svg';

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.headerBackground};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 0px 8px ${({ theme }) => theme.shadow};
  height: 40px;
  @media only screen and (min-width: 600px) {
    padding: 20px 50px;
  }
`;
export const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 0.9rem;
  margin: 0;
  @media only screen and (min-width: 600px) {
    font-size: 1.3rem;
  }
`;
export const ThemeSwitch = styled.button`
  display: flex;
  border: none;
  align-items: center;
  background-color: ${({ theme }) => theme.headerBackground};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;
export const MoonIcon = styled(MoonImage)`
  width: 16px;
  margin-right: 10px;
  fill: #fff;
  stroke: #000;
`;
