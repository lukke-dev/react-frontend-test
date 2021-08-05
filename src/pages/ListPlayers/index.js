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
import Loading from '../../components/Loading';
import {
  getPlayersByQuery,
  deletePlayer,
  getPlayers,
} from '../../services/api';

const ListPlayers = () => {
  const [listPlayers, setListPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [next, setNext] = useState(1);
  const [previous, setPrevious] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totPages, setTotPages] = useState(1);
  const query = useLocation();
  const history = useHistory();
  const limit = 3;

  useEffect(() => {
    const players = async () => {
      setIsLoading(true);
      setCurrentPage(query.search.slice(6, 7));
      const resp = await getPlayersByQuery(query.search);
      const totItems = await getPlayers();
      setTotPages(Math.ceil(totItems.length / limit));
      setListPlayers(resp);
      if (currentPage > 1) setPrevious(Number(currentPage) - 1);
      if (currentPage < totPages) setNext(Number(currentPage) + 1);
      setIsLoading(false);
    };
    players();
  }, [currentPage, query, totPages]);

  const handleDelete = async (id) => {
    setIsLoading(true);
    await deletePlayer(id);
    toast.dark('Jogador deletado!');
    history.push('./?page=1&limit=3');
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
                  to="/listplayers/?page=1&limit=3"
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
          {currentPage !== '1' && (
            <Link to={`/listplayers/?page=${previous}&limit=${limit}`}>
              <FaRegArrowAltCircleLeft size={36} color="#191716" />
            </Link>
          )}
          {currentPage < totPages && (
            <Link to={`/listplayers/?page=${next}&limit=${limit}`}>
              <FaRegArrowAltCircleRight size={36} color="#191716" />
            </Link>
          )}
        </S.BtnPage>
      )}
    </S.Wrapper>
  );
};
export default ListPlayers;
