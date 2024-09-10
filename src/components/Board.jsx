import Grogu from "./Grogu"

function Board({container}) {
  // creamos una array de 7 posiciones con valor null
  /* Array no da la longitud y fill los datos */
  const cell = Array(7).fill(null)

  

  
    return(
        <section className="board">
          {cell.map((eachItem,i)=><div key={i} className="cell"> {container === i && <Grogu /> } </div> )}
        
        {/* aqui variables de estado SetBox */}
        {/*<div className="cell" > <Grogu /> </div>
        <div className="cell" ></div> 
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>*/}
      </section>
    )
}

export default Board