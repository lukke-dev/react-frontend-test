import styled from 'styled-components';

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

export const Wrapper = styled.div``;
