import * as S from './styles';

const NavBar = () => (
  <S.Wrapper>
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
  </S.Wrapper>
);

export default NavBar;
