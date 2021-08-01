/* eslint no-underscore-dangle: 0 */
import { useEffect, useState } from 'react';
import * as S from './styles';
import { getPlayers } from '../../utils/api';

const ListPlayers = () => {
  const [listPlayers, setListPlayers] = useState([]);

  useEffect(() => {
    const players = async () => {
      const resp = await getPlayers();
      setListPlayers(resp.data);
    };
    players();
  }, [setListPlayers]);

  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Jogador</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {listPlayers.map((value) => (
            <tr key={value._id}>
              <td>{value._id}</td>
              <td>{value.playerName}</td>
              <td>{value.playerCoins}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};
export default ListPlayers;
