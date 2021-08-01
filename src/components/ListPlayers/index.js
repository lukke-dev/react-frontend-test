/* eslint no-underscore-dangle: 0 */
import { useEffect, useState } from 'react';
import { FaWindowClose, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import { getPlayers, deletePlayer } from '../../services/api';
import Loading from '../Loading';

const ListPlayers = () => {
  const [listPlayers, setListPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const players = async () => {
    const resp = await getPlayers();
    setListPlayers(resp.data);
    setIsLoading(false);
  };
  useEffect(() => {
    players();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    await deletePlayer(id);
    players();
    toast.dark('Jogador deletado!');
  };

  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Jogador</th>
            <th>Saldo</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {listPlayers.map((value) => (
            <tr key={value._id}>
              <td>{value._id}</td>
              <td>{value.playerName}</td>
              <td>{value.playerCoins}</td>
              <td>
                <Link to={`/edit/${value._id}`}>
                  <FaEdit cursor="pointer" color="#191716" />
                </Link>
                <Link
                  to="/listplayers/"
                  onClick={() => handleDelete(value._id)}
                >
                  <FaWindowClose
                    cursor="pointer"
                    color="#c3073f"
                    style={{ marginLeft: '10px' }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};
export default ListPlayers;
