/* eslint-disable no-unused-vars */
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addPlayer } from '../../services/api';
import * as S from './styles';

const NewPlayer = () => {
  let player = '';
  let playerName = '';
  const playerCoins = '10';
  const history = useHistory();

  const handleChange = (e) => {
    playerName = e.target.value;
  };

  const addPlayerDetails = async (e) => {
    e.preventDefault();
    if (playerName.length < 3)
      return toast.error(
        'O nome do jogador precisa ter no mínimo de 3 Caracteres!'
      );
    player = { playerName, playerCoins };
    const resp = await addPlayer(player);
    if (resp === 'error') return e;
    history.push('./listPlayers');
    return e;
  };
  return (
    <S.Wrapper>
      <form>
        <label htmlFor="playerName">
          Nome do Jogador: <br />
          <input
            id="playerName"
            type="text"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="playerCoins">
          Saldo do Jogador:
          <br />
          <input type="number" placeholder="10" readOnly />
        </label>
        <button type="button" onClick={(e) => addPlayerDetails(e)}>
          Criar Jogador
        </button>
      </form>
    </S.Wrapper>
  );
};

export default NewPlayer;
