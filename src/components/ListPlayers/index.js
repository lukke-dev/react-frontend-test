/* eslint-disable */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  FaWindowClose,
  FaEdit,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from 'react-icons/fa';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as S from './styles';
import Loading from '../Loading';
import { getPlayersByQuery, deletePlayer, getPlayers } from '../../services/api';

const ListPlayers = () => {
  const [listPlayers, setListPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [next, setNext] = useState(1)
  const [previous, setPrevious] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const query = useLocation();
  const history = useHistory();
  const limit = 3;
  let page = 1;
  useEffect(() => {
    const players = async () => {
      page = query.search.slice(6, 7);
      const resp = await getPlayersByQuery(query.search);
      setListPlayers(resp.data);
      setIsLoading(false);
      if(page > 1)setPrevious(Number(page) - 1)
      if(resp.data.length === limit)setNext(Number(page) + 1)
    };

    players();
  }, [query,setListPlayers, page, setNext, setPrevious, setTotalPages]);

  const handleDelete = async (id) => {
    setIsLoading(true);
    await deletePlayer(id);
    toast.dark('Jogador deletado!');
    history.push('./');
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
          {listPlayers.map((player) => (
            <tr key={player._id}>
              <td>{player._id}</td>
              <td>{player.playerName}</td>
              <td>{player.playerCoins}</td>
              <td>
                <Link to={`/edit/${player._id}`}>
                  <FaEdit cursor="pointer" color="#191716" />
                </Link>
                <Link
                  to="/listplayers/"
                  onClick={() => handleDelete(player._id)}
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
      {listPlayers.length > 0 && (
        <S.BtnPage>
          <Link to={`/listplayers/?page=${previous}&limit=${limit}`}>
            <FaRegArrowAltCircleLeft size={36} color="#191716" />
          </Link>
          <Link to={`/listplayers/?page=${next}&limit=${limit}`}>
            <FaRegArrowAltCircleRight size={36} color="#191716" />
          </Link>
        </S.BtnPage>
      )}
    </S.Wrapper>
  );
};
export default ListPlayers;
