import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import image from '../../images/moon.svg';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.headerBackground};
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 4px 4px ${({ theme }) => theme.shadow};
`;

const HeaderTitle = styled.div`
  font-weight: 800;
  font-size: 0.9rem;
`;
const ThemeSwitch = styled.button`
  display: flex;
  border: none;
  background-color: ${({ theme }) => theme.headerBackground};
  font-weight: 600;
  cursor: pointer;
  font-size: 0.8rem;
`;
const ModeIcon = styled.img`
  width: 20px;
  margin-right: 10px;
`;
interface HeaderProps {
  toggleTheme(): void;
}
function Header({ toggleTheme }:HeaderProps): JSX.Element {
  return (
    <Wrapper>
      <HeaderTitle className="header__title">Where in the world?</HeaderTitle>
      <ThemeSwitch onClick={() => { toggleTheme(); }}>
        <ModeIcon alt="Moon" src={image} />
        Dark Mode
      </ThemeSwitch>
    </Wrapper>
  );
}
export default Header;
