import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #191716;
  color: #e0e2db;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Link = styled(NavLink)`
  font-size: 1.7rem;
  font-weight: bold;
  color: #beb7a4;
  text-decoration: none;
  margin: 0 20px;
`;

export const Bar = styled.h2`
  color: #beb7a4;
  opacity: 0.3;
`;
