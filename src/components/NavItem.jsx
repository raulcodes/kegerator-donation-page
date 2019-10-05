import React from 'react';

import StyledNavItem from '../styled_components/NavItem.styled';

const NavItem = ({ path, title }) => (
  <StyledNavItem path={path}>{title}</StyledNavItem>
);

export default NavItem;