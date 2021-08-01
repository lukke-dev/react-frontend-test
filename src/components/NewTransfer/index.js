import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addTranfer } from '../../services/api';
import * as S from './styles';

const initialValues = {
  origin: '',
  destination: '',
  value: '',
};

const NewPlayer = () => {
  const [newTransfer, setNewTransfer] = useState(initialValues);
  const { origin, destination, value } = newTransfer;
  const history = useHistory();

  const handleChange = (e) => {
    setNewTransfer({ ...newTransfer, [e.target.name]: e.target.value });
  };

  const transferDetails = async (e) => {
    e.preventDefault();
    if (origin === '') return toast.error('Campo origem vazio!');
    if (destination === '') return toast.error('Campo destino vazio!');
    if (value === '') return toast.error('Campo valor vazio!');
    const resp = await addTranfer(newTransfer);
    if (resp === 'error') {
      toast.error('Dados inválidos ou saldo insuficiente!');
      return e;
    }
    history.push('./listtransfers');
    return e;
  };
  return (
    <S.Wrapper>
      <form>
        <label htmlFor="origin">
          Origem:
          <br />
          <input
            id="origin"
            type="text"
            onChange={(e) => handleChange(e)}
            value={origin}
            name="origin"
          />
        </label>
        <label htmlFor="destination">
          Destino: <br />
          <input
            id="destination"
            type="text"
            onChange={(e) => handleChange(e)}
            value={destination}
            name="destination"
          />
        </label>
        <label htmlFor="value">
          Valor:
          <br />
          <input
            type="number"
            onChange={(e) => handleChange(e)}
            value={value}
            name="value"
          />
        </label>
        <button type="button" onClick={(e) => transferDetails(e)}>
          Transferir
        </button>
      </form>
    </S.Wrapper>
  );
};

export default NewPlayer;
