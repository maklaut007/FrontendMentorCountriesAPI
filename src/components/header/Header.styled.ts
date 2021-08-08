import styled from 'styled-components';
import { ReactComponent as MoonImage } from '../../images/moon.svg';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.headerBackground};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.shadow};
`;
export const HeaderTitle = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
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
