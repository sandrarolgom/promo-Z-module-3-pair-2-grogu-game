// Fichero src/components/App.jsx 
import '../scss/index.scss';
import '../scss/body.scss';
import { useEffect, useState } from 'react';
import Header from './Header';
import Board from './Board';
import Container from './Container';
import Dice from './Dice';
import Form from './Form';
import NavLink from './Footer';
import { Route, Routes } from 'react-router-dom';
import Rules from './Rules';
import Footer from './Footer';
import Options from './Options';

/* Primer paso:
--> inicializar el estado de Grogu
--> incluir la posicón inical de Grogu, de la mercancía 
--> resultado de Grogu
*/

function App() {
  // aquí van las variables de estado
 const [groguPosition, setGroguPosition] = useState (0);
 const [cookie, setCookie] = useState(['🍪','🍪','🍪']);//  dentro del array esta la posición inicial 
 const [egg, setEgg] = useState(['🥚','🥚','🥚']);
 const [frog, setFrog] = useState(['🐸','🐸','🐸']);
 const [status, setStatus] = useState('En curso');
 const [name, setName] = useState('');
 
useEffect(() => {
  if (groguPosition === 6) {
    setStatus("¡¡Grogu se ha comido el cargamento!! Has perdido");
  }else {
    setStatus("Ganaste, Mando completa la misión");
 }  
}, [groguPosition]);



 const rollDice=()=>{
  let numberRandom = Math.floor(Math.random() * 4) + 1;
  console.log(numberRandom);
  /*
  si numberRandom === 4 , GROGU AVANZA --> actualizar posición
  si numberRandom === 1 || 2 || 3 , QUITAR UNA MERCANCÍA (se quita 1 elemento del array de mercancía)
  */
  if (numberRandom === 4){
    setGroguPosition(groguPosition + 1);
    setStatus("Grogu ha avanzado una casilla")
  } else if (numberRandom === 1){
    setCookie(cookie.slice(1))
    setStatus(`${name} has ayudado a Mando a recoger galleta`)
  } else if (numberRandom === 2){
    setEgg(egg.slice(1))
    setStatus(`${name} has ayudado a Mando a recoger huevo`)
  } else if (numberRandom === 3){
    setFrog(frog.slice(1))
    setStatus(`${name} has ayudado a Mando a recoger rana`)
  }
   

}  
  return (
    <div className="page">
      <Header />
      <main className="page">
        <Routes>
          <Route path="./rules" element={<Rules />} />
          <Route path="/" element={
            <>
            <Form setName={setName}/>
            <Board container={groguPosition}/>
            <section>
              {/*aqui va el evento onChange para que cambie la posicion de Grogu*/}
              <Dice rollDice={rollDice}/>
              <div className="game-status">{status}</div>
            </section>
            {/* recogemos los datos del array y los añadimos al componente */}
            <Container item={cookie}/>
            <Container item={egg}/>
            <Container item={frog}/>
            <section>
              <button className="restart-button">Reiniciar Juego</button>
            </section>
            </>
          }/>
          {/* <Route path='/play' element={<NavLink/>}/> */}
          <Route path='/rules' element={<Rules/>}/>
          <Route path='/options' element={<Options/>}/>
        </Routes>       
      </main>
      <Footer />
     </div>
  );
}

export default App;