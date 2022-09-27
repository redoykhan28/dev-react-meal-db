import logo from './logo.svg';
import './App.css';
import Meals from './Component/Meals/Meals';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
    </div>
  );
}

export default App;
