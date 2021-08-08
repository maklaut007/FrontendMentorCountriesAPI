import React from 'react';
import styled from 'styled-components';
import * as Styled from './Header.styled';

interface HeaderProps {
  toggleTheme(): void;
}
function Header({ toggleTheme }:HeaderProps): JSX.Element {
  return (
    <Styled.Wrapper>
      <Styled.HeaderTitle className="header__title">Where in the world?</Styled.HeaderTitle>
      <Styled.ThemeSwitch onClick={() => { toggleTheme(); }}>
        <Styled.MoonIcon />
        Dark Mode
      </Styled.ThemeSwitch>
    </Styled.Wrapper>
  );
}
export default Header;
