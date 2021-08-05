import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { editPlayer, getPlayers, getByName } from '../../services/api';
import Loading from '../../components/Loading';
import * as S from './styles';

const NewPlayer = () => {
  const [playerName, setPlayerName] = useState('');
  const [placeHolder, setPlaceHolder] = useState('');
  const { id } = useParams();
  const playerCoins = '10';
  let player = '';

  useEffect(() => {
    const loadPlayerData = async () => {
      const resp = await getPlayers(id);
      setPlaceHolder(resp);
    };

    loadPlayerData();
  }, [setPlaceHolder, id]);

  const history = useHistory();

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  const editPlayerDetails = async () => {
    player = { playerName, playerCoins };
    await editPlayer(id, player);
    history.push('/listplayers');
    toast.success('Nome do jogador alterado com sucesso');
  };
  const getName = async (e) => {
    e.preventDefault();
    if (playerName === '') return toast.error('Nome do jogador vazio!');
    const resp = await getByName(playerName);
    if (resp.data.playerName)
      return toast.error('Já existe um jogador com esse nome!');
    return editPlayerDetails();
  };

  return (
    <S.Wrapper>
      {placeHolder.length === 0 && <Loading />}
      <form>
        <label htmlFor="playerName">
          Nome do Jogador: <br />
          <input
            id="playerName"
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder={placeHolder.playerName}
          />
        </label>
        <label htmlFor="playerCoins">
          Saldo do Jogador:
          <br />
          <input type="number" placeholder="10" readOnly />
        </label>
        <button type="button" onClick={(e) => getName(e)}>
          Editar Jogador
        </button>
      </form>
    </S.Wrapper>
  );
};

export default NewPlayer;
