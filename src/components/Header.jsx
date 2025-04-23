import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <h1>Logo</h1>
      </StyledLink>
      <NavStyle>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
      </NavStyle>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  background-color: #375ef7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;
const NavStyle = styled.nav`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 40px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  &.active {
    color: #f5dd51;
    border-bottom: 3px solid currentColor;
  }
`;
