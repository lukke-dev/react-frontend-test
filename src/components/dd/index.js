import { useState } from 'react';
import Axios from 'axios';
import './styles.css';

const Card = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  function addPlayer() {
    Axios.post('http://localhost:3000/player/insert', {
      id,
      name,
    });
  }
  return (
    <div className="container">
      <label htmlFor="playerId">
        Id <br />
        <input
          type="text"
          id="playerId"
          placeholder="ex: 1111"
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
      </label>
      <label htmlFor="playerName">
        Nome do Jogador <br />
        <input
          type="text"
          id="playerName"
          placeholder="Seu nome"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>
      <label htmlFor="playerCoins">
        Saldo <br />
        <input type="number" id="playerCoins" placeholder="10" disabled />
      </label>
      <button type="submit" onClick={addPlayer}>
        Criar Jogador
      </button>
    </div>
  );
};

export default Card;
