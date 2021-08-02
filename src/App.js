import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles';
import NavBar from './components/NavBar';
import NewPlayer from './components/NewPlayer';
import EditPlayer from './components/EditPlayer';
import ListPlayers from './components/ListPlayers';
import NewTransfer from './components/NewTransfer';
import ListTransfers from './components/ListTransfers';
import ListOnePlayer from './components/ListOnePlayer';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={NewPlayer} />
        <Route exact path="/edit/:id" component={EditPlayer} />
        <Route exact path="/listplayers/:page?" component={ListPlayers} />
        <Route exact path="/listone/:name" component={ListOnePlayer} />
        <Route exact path="/newtransfer" component={NewTransfer} />
        <Route exact path="/listtransfers" component={ListTransfers} />
        <Route component={Page404} />
      </Switch>
      <ToastContainer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
