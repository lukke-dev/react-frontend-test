import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 180px;

  @media (max-width: 600px) {
    margin: 100px 15px;
  }
`;

export const Table = styled.table`
  font-size: 2rem;
  color: #191716;
  text-align: center;
  width: 100%;
  letter-spacing: 2px;
  line-height: 3rem;
  th {
    height: 40px;
    background-color: #191716;
    color: #e0e2db;
  }

  button {
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    line-height: 2rem;
    th:nth-child(5) {
      display: none;
    }

    td:nth-child(5) {
      display: none;
    }
  }
`;
