import './App.css';
import PersonCard from './componente/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard Nombre="Juan" Apellido="Garcete" año={45} colorPelo="Negro"/>
      <PersonCard Nombre="Catalina" Apellido="Mora Lopez" año={20} colorPelo="Rojo"/>
      
    </div>
  );
}

export default App;
