/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import Loading from '../Loading';
import { getByName } from '../../services/api';

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const history = useHistory();

  const searchByName = async () => {
    setIsLoading(true);
    const resp = await getByName(`/${value}`);
    if (!resp.data) {
      setIsLoading(false);
      return toast.error('Jogador não existe');
    }
    setIsLoading(false);
    return history.push(`/listone/${resp.data.playerName}`);
  };

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
      <S.Search type="search" onChange={(e) => setValue(e.target.value)} />
      <S.BtnSearch onClick={() => searchByName()}>
        <FaSearch size={16} color="#E0E2DB" />
      </S.BtnSearch>
    </S.Wrapper>
  );
};

export default NavBar;
