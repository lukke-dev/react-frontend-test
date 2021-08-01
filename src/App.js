import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/globalstyles';
import NavBar from './components/NavBar';
import NewPlayer from './components/NewPlayer';
import ListPlayers from './components/ListPlayers';
import NewTransfer from './components/NewTransfer';
import ListTransfers from './components/ListTransfers';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={NewPlayer} />
        <Route exact path="/listplayers" component={ListPlayers} />
        <Route exact path="/newtransfer" component={NewTransfer} />
        <Route exact path="/listtransfers" component={ListTransfers} />
        <Route component={Page404} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
