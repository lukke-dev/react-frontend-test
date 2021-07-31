import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import List from './components/List';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Card />
      <List />
    </div>
  );
}

export default App;
