import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  height: 100%;
  text-align: center;
  color: #191716;
  form {
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form label {
    margin-top: 3rem;
  }
  form input {
    background-color: #e0e2db;
    font-size: 3rem;
    color: #191716;
    text-align: center;
    width: 300px;
    border: none;
    border-bottom: 1px solid #c3073f;
  }

  button {
    margin-top: 30px;
    cursor: pointer;
    background: #c3073f;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    color: #e0e2db;
    font-size: 2rem;
    font-weight: bold;
    transition: all 300ms;
  }
  button:hover {
    background: #191716;
  }
`;
