import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #191716;
  height: 50px;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;

    .active-menu {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      flex-direction: column;
      position: absolute;
      width: 50%;
      height: 100vh;
      top: 50px;
      right: 0px;
      background-color: #191716;
    }
  }
`;

export const MenuMobile = styled(GiHamburgerMenu)`
  cursor: pointer;
  display: none;
  color: #e0e2db;

  &:hover {
    color: #beb7a4;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  background-color: #191716;
  color: #e0e2db;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.7rem;
  font-weight: bold;
  color: #beb7a4;
  text-decoration: none;
  margin: 0 20px;

  &:hover {
    color: #e0e2db;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

export const Bar = styled.h2`
  color: #beb7a4;
  opacity: 0.3;

  @media (max-width: 600px) {
    color: #191716;
  }
`;

export const Search = styled.input`
  height: 30px;
  width: 200px;
  font-size: 20px;
  background-color: #191716;
  border: 3px solid #beb7a4;
  border-radius: 5px;
  color: #e0e2db;
  transition: all ease-in-out 0.7s;
  &:hover {
    border: 3px solid #e0e2db;
  }

  &:focus {
    width: 400px;
  }

  @media (max-width: 600px) {
    margin: 20px 20px 20px 0;
    width: 140px;

    &:focus {
      width: 140px;
    }
  }
`;

export const BtnSearch = styled.button`
  cursor: pointer;
  background-color: #191716;
  border: none;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
