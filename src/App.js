//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  const onAdd = () => {};
  return (
    <div className="App">
      <NavBar/>
       <h2>Las ofertas de la semana</h2>
       <ItemListContainer greeting='Bienvenido' />  
       <ItemCount stock={5} initial={1} onAdd> {onAdd}</ItemCount>
    </div>

  );
}

export default App;
