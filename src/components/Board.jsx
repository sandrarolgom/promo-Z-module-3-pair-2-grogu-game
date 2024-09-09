import Grogu from "./Grogu"

function Board() {
    return(
        <section className="board">
        {/* aqui variables de estado SetBox */}
        <div className="cell" > <Grogu /> </div>
        <div className="cell" ></div> 
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
        <div className="cell" ></div>
      </section>
    )
}

export default Board