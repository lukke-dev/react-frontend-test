import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalstyles';
import NavBar from './components/NavBar';
import NewPlayer from './pages/NewPlayer';
import EditPlayer from './pages/EditPlayer';
import ListPlayers from './pages/ListPlayers';
import NewTransfer from './pages/NewTransfer';
import ListTransfers from './pages/ListTransfers';
import ListOnePlayer from './pages/ListOnePlayer';
import Page404 from './pages/Page404';

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
