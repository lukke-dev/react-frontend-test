/* eslint-disable react-hooks/exhaustive-deps */
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Loading from '../Loading';
import { getByName } from '../../services/api';

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  let value = '';

  const handleChange = (e) => {
    value = e.target.value;
  };
  const searchByName = async () => {
    setIsLoading(true);
    const resp = await getByName(`/${value}`);
    if (!resp) {
      setIsLoading(false);
      return toast.error('Jogador não Existe');
    }
    if (resp.data !== undefined) {
      setIsLoading(false);
      return history.push(`./${resp.data.playerName}`);
    }
    return resp;
  };

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchByName();
  });
  return (
    <S.Wrapper>
      {isLoading && <Loading />}
      <S.Link to="/" exact>
        Novo Jogador
      </S.Link>
      <S.Bar>|</S.Bar>
      <S.Link to="/listplayers" exact>
        Jogadores
      </S.Link>
      <S.Bar>|</S.Bar>
      <S.Link to="/newtransfer" exact>
        Nova Transferência
      </S.Link>
      <S.Bar>|</S.Bar>
      <S.Link to="/listtransfers" exact>
        Transferências
      </S.Link>
      <S.Search type="search" onChange={(e) => handleChange(e)} />
      <S.BtnSearch onClick={() => searchByName()}>
        <FaSearch size={16} color="#E0E2DB" />
      </S.BtnSearch>
    </S.Wrapper>
  );
};

export default NavBar;
