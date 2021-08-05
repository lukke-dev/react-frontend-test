import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './styles';
import Loading from '../Loading';
import { getByName } from '../../services/api';
import SearchBar from '../SearchBar';

const NavBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const history = useHistory();

  const searchByName = async () => {
    setIsLoading(true);
    if (value === '') {
      setIsLoading(false);
      return toast.error('Campo de pesquisa vazio');
    }
    const resp = await getByName(`/${value}`);
    if (!resp.data) {
      setIsLoading(false);
      return toast.error('Jogador não existe');
    }
    setIsLoading(false);
    return history.push(`/listone/${resp.data.playerName}`);
  };

  const handleClick = () => {
    const nav = document.querySelector('nav#menu');
    nav.classList.toggle('active-menu');
  };

  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <S.Wrapper>
      <S.MenuMobile onClick={handleClick} size={36} />
      <S.Nav id="menu">
        {isLoading && <Loading />}
        <S.Link to="/" exact onClick={handleClick}>
          Novo Jogador
        </S.Link>
        <S.Bar>|</S.Bar>
        <S.Link to="/listplayers/?page=1&limit=3" exact onClick={handleClick}>
          Jogadores
        </S.Link>
        <S.Bar>|</S.Bar>
        <S.Link to="/newtransfer" exact onClick={handleClick}>
          Nova Transferência
        </S.Link>
        <S.Bar>|</S.Bar>
        <S.Link to="/listtransfers" exact onClick={handleClick}>
          Transferências
        </S.Link>
        <SearchBar handleChange={handleChange} val={value} />
        <S.BtnSearch onClick={() => searchByName()}>
          <FaSearch size={16} color="#E0E2DB" onClick={handleClick} />
        </S.BtnSearch>
      </S.Nav>
    </S.Wrapper>
  );
};

export default NavBar;
