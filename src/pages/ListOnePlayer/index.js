/* eslint no-underscore-dangle: 0 */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaWindowClose, FaEdit } from 'react-icons/fa';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as S from './styles';
import Loading from '../../components/Loading';
import { deletePlayer, getByName } from '../../services/api';

const ListOnePlayer = () => {
  const name = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState('');

  useEffect(() => {
    const players = async () => {
      const resp = await getByName(name.pathname);
      if (player === '') {
        if (resp.data.playerName) {
          setPlayer(resp.data);
        }
      }
      setIsLoading(false);
    };
    players();
  });
  const handleDelete = async (id) => {
    setIsLoading(true);
    await deletePlayer(id);
    toast.dark('Jogador deletado!');
    history.push('/listplayers');
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
          <tr>
            <td>{player._id}</td>
            <td>{player.playerName}</td>
            <td>{player.playerCoins}</td>
            <td>
              <Link to={`/edit/${player._id}`}>
                <FaEdit cursor="pointer" color="#191716" />
              </Link>
              <Link to="/listplayers/" onClick={() => handleDelete(player._id)}>
                <FaWindowClose
                  cursor="pointer"
                  color="#c3073f"
                  style={{ marginLeft: '10px' }}
                />
              </Link>
            </td>
          </tr>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};
export default ListOnePlayer;
