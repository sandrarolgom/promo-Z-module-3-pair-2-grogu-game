// Fichero src/components/App.jsx 
import '../scss/index.scss';
import '../scss/body.scss';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';
import Container from './Container';

/* Primer paso:
--> inicializar el estado de Grogu
--> incluir la posicón inical de Grogu, de la mercancía 
--> resultado de Grogu
*/

function App() {
  // aquí van las variables de estado
 const [box, setBox] = useState (0);
 const [cookie, setCookie] = useState(['🍪','🍪','🍪']);//  dentro del array esta la posición inicial 
 const [egg, setEgg] = useState(['🥚','🥚','🥚']);
 const [frog, setFrog] = useState(['🐸','🐸','🐸']);
 const [status, setStatus] = useState('En curso');
 
 const rollDice=()=>{
  let numberRandom = Math.floor(Math.random() * 4) + 1;
  console.log(numberRandom);
  /*
  si numberRandom === 4 , GROGU AVANZA --> actualizar posición
  si numberRandom === 1 || 2 || 3 , QUITAR UNA MERCANCÍA (se quita 1 elemento del array de mercancía)
  */
  if (numberRandom === 4){
    setBox(box + 1);
    setStatus("Grogu ha avanzado una casilla")
  } else if (numberRandom === 1){
    setCookie(cookie.slice(1))
    setStatus("Se ha descargado una galleta")
  } else if (numberRandom === 2){
    setEgg(egg.slice(1))
    setStatus("Se ha descargado un huevo")
  } else if (numberRandom === 3){
    setFrog(frog.slice(1))
    setStatus("Se ha descargado una rana")
  }


  /* 
  si Grogu
  */
}  
  return (
    <div className="page"> 
      <Header />
      <main className="page">
        <Board />
      <section>
        {/*aqui va el evento onChange para que cambie la posicion de Grogu*/}
        <button className="dice" onClick={rollDice}>Lanzar Dado</button>
        <div className="game-status">{status}</div>
      </section>
      {/* recogemos los datos del array y los añadimos al componente */}
      <Container item={cookie}/>
      <Container item={egg}/>
      <Container item={frog}/>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
  </div>
  );
}

export default App;