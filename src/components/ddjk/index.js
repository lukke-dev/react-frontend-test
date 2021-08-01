/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Axios from 'axios';
import * as S from './styles';

const List = () => {
  const [listPlayers, setListPlayers] = useState([]);

  useEffect(() => {
    try {
      Axios.get(`https://api-test-fullstack.herokuapp.com/players`).then(
        (response) => {
          setListPlayers(response.data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, [setListPlayers]);
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <th>Id</th>
          <th>Nome</th>
          <th>Saldo</th>
        </thead>
        {listPlayers.map((value) => (
          <div key={value.playerName}>
            {' '}
            <h2>Id: {value.playerName}</h2> <h2>Nome: {value.playerCoins}</h2>{' '}
          </div>
        ))}
      </S.Table>
    </S.Wrapper>
  );
};
export default List;
