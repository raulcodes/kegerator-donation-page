import React from 'react';

import StyledNav from '../styled_components/Nav.styled';
import NavItem from './NavItem';

const Nav = () => (
  <StyledNav>
    <NavItem path="/pints4paws" title="Pints4Paws" />
    <NavItem path="/" title="Current Taps" />
    <NavItem path="/hallofkegs" title="Hall of Kegs" />
  </StyledNav>
);

export default Nav;