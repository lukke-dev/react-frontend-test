import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #191716;
  color: #e0e2db;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
`;

export const Bar = styled.h2`
  color: #beb7a4;
  opacity: 0.3;
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
`;

export const BtnSearch = styled.button`
  cursor: pointer;
  background-color: #191716;
  border: none;
`;
