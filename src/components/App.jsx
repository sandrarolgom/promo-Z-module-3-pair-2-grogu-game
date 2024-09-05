// Fichero src/components/App.jsx 
import '../scss/index.scss';
import '../scss/body.scss';
import { useState } from 'react';

/* Primer paso:
--> inicializar el estado de Grogu
--> incluir la posicón inical de Grogu, de la mercancía 
--> resultado de Grogu
*/





function App() {
  // aquí van las variables de estado
 const [box, setBox] = useState (0);
 const [cookie, setCookie] = useState(['🍪','🍪','🍪']);//  dentro del array es la posición inicial
 const [egg, setEgg] = useState(['🥚','🥚','🥚']);
 const [frog, setFrog] = useState(['🐸','🐸','🐸']);
 const [status, setStatus] = useState('En curso');
 

 
  return (
    <div className="page"> 
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        {/* aqui variables de estado SetBox */}
        <div className="cell" ><div className="grogu">👣</div></div>
        <div className="cell" ></div> 
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
      </section>

      <section>
        {/*aqui va el evento onChange para que cambie la posicion de Grogu*/}
        <button className="dice">Lanzar Dado</button>
        <div className="game-status">{status}</div>
      </section>

      <section className="goods-container">
        {/*variable de estado cookie*/}
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        {/* variable de estado egg*/}
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        {/* variable de estado frog*/}
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
  </div>
  );
}

export default App;